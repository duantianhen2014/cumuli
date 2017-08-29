<?php

namespace App\Listeners;

use App\Config;
use App\Events\ConfigChangedEvent;
use Illuminate\Support\Facades\Cache;

class ConfigChangedEventListener
{
    /**
     * ConfigChangedEventListener constructor.
     */
    public function __construct()
    {
        //
    }

    /**
     * 缓存配置项
     * @param ConfigChangedEvent $event
     */
    public function handle(ConfigChangedEvent $event)
    {
        $values = collect([]);
        Config::chunk(1000, function ($configs) use (&$values) {
            $values = $values->merge($configs);
        });
        // 写入永久缓存
        Cache::forever('cache:config.changed', $values);
    }
}
