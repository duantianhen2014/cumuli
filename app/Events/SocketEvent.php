<?php

namespace App\Events;

use Auth;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class SocketEvent extends Event implements ShouldBroadcast
{
    public $data;

    protected $channel;
    protected $event;

    /**
     * SocketEvent constructor.
     * @param string $channel
     * @param string $event
     */
    public function __construct($channel = 'socket', $event = 'socket:event')
    {
        $this->channel = $channel;
        $this->event = $event;
        $this->data = Auth::User();
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [$this->channel];
    }

    /**
     * Get the name the event should be broadcast on.
     *
     * @return string
     */
    public function broadcastAs()
    {
        return $this->event;
    }
}
