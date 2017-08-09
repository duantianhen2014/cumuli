<?php

namespace App\Providers;

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
        if (!empty($_SERVER['HTTP_HOST'])) {
            \App\Config::chunk(1000, function ($configs) {
                foreach ($configs as $config) {
                    config([$config->key => $config->value]);
                }
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
