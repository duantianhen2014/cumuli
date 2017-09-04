<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Notification;
use App\Notifications\FlowCheck;
use App\Events\FlowProgressSavedEvent;

class FlowProgressSavedEventListener
{

    /**
     * Handle the event.
     *
     * @param  FlowProgressSavedEvent $event
     * @return void
     */
    public function handle(FlowProgressSavedEvent $event)
    {
        $model = $event->model;
        $detail = $model->flow->details->get($model->progress ?: 0);
        if (!$detail) {
            return false;
        }

        $users = collect([]);
        if ($detail->check->users) {
            $users = $users->merge($detail->check->users);
        }
        if ($detail->check->roles) {
            $detail->check->roles->each(function ($role) use (&$users) {
                $users = $users->merge($role->users);
            });
        }
        if ($detail->check->structures) {
            $detail->check->structures->each(function ($structure) use (&$users) {
                $users = $users->merge($structure->users);
            });
        }

        // 给用户发送通知
        Notification::send($users->unique('id')->values(), new FlowCheck($model));
    }
}
