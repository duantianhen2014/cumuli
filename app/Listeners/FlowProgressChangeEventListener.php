<?php

namespace App\Listeners;

use Auth;
use App\Events\FlowProgressChangeEvent;

class FlowProgressChangeEventListener
{

    /**
     * Handle the event.
     *
     * @param  FlowProgressChangeEvent $event
     * @return void
     */
    public function handle(FlowProgressChangeEvent $event)
    {
        $user = Auth::User();
        $model = $event->model;
        $model->updated_by = $user->id; // 更新最后操作人
        $details = $model->flow->details;

        $detail = null;
        $log = $model->log;
        switch ($model->status) {
            case 'success':
                $detail = $details->get($model->progress);
                array_push($log, [
                    'type' => 'operate',
                    'operate' => 1,
                    'step' => $model->progress + 1,
                    'status' => 'success',
                    'user' => $user,
                ]);
                break;
            case 'fail':
                $detail = $details->get($model->progress);
                array_push($log, [
                    'type' => 'operate',
                    'operate' => 0,
                    'step' => $model->progress + 1,
                    'status' => 'fail',
                    'user' => $user,
                ]);
                break;
            case 'wait':
                $detail = $details->get($model->progress - 1);
                array_push($log, [
                    'type' => 'operate',
                    'operate' => 1,
                    'step' => $model->progress,
                    'status' => 'wait',
                    'user' => $user,
                ]);
                break;
            case 'back':
                $detail = $details->get($model->progress + 1);
                array_push($log, [
                    'type' => 'operate',
                    'operate' => -1,
                    'step' => $model->progress + 2,
                    'status' => 'back',
                    'user' => $user,
                ]);
                break;
        }
        $model->log = $log;

        // 审核人验证，否则返回403没有权限状态
        if (!$detail) {
            return abort(403);
        }

        $check = 3;
        if ($detail->check->users->pluck('id')->search($user->id) === false) {
            $check--;
        }
        if ($check < 3 && !$detail->check->roles->pluck('id')->intersect($user->roles->pluck('id'))->count()) {
            $check--;
        }
        if ($check < 2 && !$detail->check->structures->pluck('id')->intersect($user->structures->pluck('id'))->count()) {
            $check--;
        }
        if (!$check) {
            return abort(403);
        }
    }
}
