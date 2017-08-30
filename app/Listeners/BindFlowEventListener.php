<?php

namespace App\Listeners;

use App\Events\BindFlowEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class BindFlowEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  BindFlowEvent  $event
     * @return void
     */
    public function handle(BindFlowEvent $event)
    {
        //
    }
}
