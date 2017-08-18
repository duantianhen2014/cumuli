<?php

namespace App\Events;

use Auth;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Event implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;

    protected $channel;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($channel = '')
    {
        $this->user = Auth::user();
        $this->channel = $channel ?: new PrivateChannel('channel-name');
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
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
        return 'socket:event';
    }

}
