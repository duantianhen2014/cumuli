<?php

namespace App\Console\Commands\socket;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Redis as Predis;

class redis extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'socket:redis';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '订阅Redis';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Predis::psubscribe(['*'], function ($message, $channel) {
            echo json_encode(['type' => 'redis', 'channel' => $channel, 'data' => $message]);
        });
    }
}
