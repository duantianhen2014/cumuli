<?php

namespace App\Events;

use Illuminate\Broadcasting\PrivateChannel;

class FlowBindEvent extends Event
{
    public $model;

    /**
     * FlowBindEvent constructor.
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
        return new PrivateChannel('event:flow.bind');
    }
}
