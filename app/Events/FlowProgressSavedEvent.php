<?php

namespace App\Events;

use Illuminate\Broadcasting\PrivateChannel;

class FlowProgressSavedEvent extends Event
{
    public $model;

    /**
     * FlowProgressSavedEvent constructor.
     * @param $model
     */
    public function __construct($model)
    {
        $this->model = $model;
    }

    /**
     * @return PrivateChannel
     */
    public function broadcastOn()
    {
        return new PrivateChannel('event:flow.progress.saved');
    }
}
