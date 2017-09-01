<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        // 更新自定义配置缓存
        'App\Events\ConfigChangedEvent' => [
            'App\Listeners\ConfigChangedEventListener',
        ],
        // 绑定工作流到对应数据
        'App\Events\FlowBindEvent' => [
            'App\Listeners\FlowBindEventListener',
        ],
        // 监听工作流进度变化然后记录日志
        'App\Events\FlowProgressChangeEvent' => [
            'App\Listeners\FlowProgressChangeEventListener',
        ],
        // 监听工作流进度变化然后触发对应钩子
        'App\Events\FlowProgressChangedEvent' => [
            'App\Listeners\FlowProgressChangedEventListener',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
