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

        // 发送通知，只需要其中任何一人查看即可
        if ($detail->check->users) {
            Notification::send($detail->check->users, new FlowCheck($model));
        }
        if ($detail->check->roles) {
            Notification::send($detail->check->roles, new FlowCheck($model));
        }
        if ($detail->check->structures) {
            Notification::send($detail->check->structures, new FlowCheck($model));
        }
    }
}
