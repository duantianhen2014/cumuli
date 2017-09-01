<?php

namespace App\Listeners;

use Auth;
use App\Flow;
use App\Events\FlowBindEvent;

class FlowBindEventListener
{
    /**
     * 绑定工作流
     * @param FlowBindEvent $event
     */
    public function handle(FlowBindEvent $event)
    {
        $model = $event->model;
        if ($model->flowCode) {
            $flow = Flow::where('code', $model->flowCode)->first();

            // 绑定数据
            if ($flow && method_exists($model, 'progresses')) {
                $model->progresses()->create([
                    'flow_id' => $flow->id,
                    'created_by' => Auth::User()->id,
                    'updated_by' => Auth::User()->id,
                ]);
            }
        }
    }
}
