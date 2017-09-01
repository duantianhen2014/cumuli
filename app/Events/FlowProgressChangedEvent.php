<?php

namespace App\Events;

use Illuminate\Broadcasting\PrivateChannel;

class FlowProgressChangedEvent extends Event
{
    public $model;

    /**
     * FlowProgressChangedEvent constructor.
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
        return new PrivateChannel('event:flow.progress.changed');
    }
}
