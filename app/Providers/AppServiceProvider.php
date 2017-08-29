<?php

namespace App\Providers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // 加载自定义配置项进行覆盖 TODO 只在http请求时启用
        if (!empty($_SERVER['HTTP_HOST']) && Cache::has('event:config:saved:cache')) {
            Cache::get('event:config:saved:cache')->each(function ($config) {
                config([$config->key => $config->value]);
            });
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
