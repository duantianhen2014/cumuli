<?php

namespace App\Socialite;

use Illuminate\Support\ServiceProvider;
use Laravel\Socialite\Contracts\Factory;

class SocialiteServiceProvider extends ServiceProvider
{

    public function boot()
    {
        $this->app->make(Factory::class)
            ->extend('dingtalk', function ($app) {
                $config = $app['config']['services.dingtalk'];
                return new DingtalkProvider(
                    $app['request'],
                    $config['client_id'],
                    $config['client_secret'],
                    $config['redirect']
                );
            });
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
    }

}
