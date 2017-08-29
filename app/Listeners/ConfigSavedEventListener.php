<?php

namespace App\Listeners;

use App\Config;
use App\Events\ConfigSavedEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Cache;

class ConfigSavedEventListener
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
     * 缓存配置项
     * @param ConfigSavedEvent $event
     */
    public function handle(ConfigSavedEvent $event)
    {
        $values = collect([]);
        Config::chunk(1000, function ($configs) use (&$values) {
            $values = $values->merge($configs);
        });
        Cache::forever('event:config:saved:cache', $values);
    }
}
