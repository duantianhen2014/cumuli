<?php

namespace App\Console\Commands\socket;

use Illuminate\Console\Command;
use Rx\Subject\BehaviorSubject;
use Rx\Websocket\Server as SocketServer;
use Rx\Websocket\MessageSubject;
use Rx\React\ProcessSubject;

class server extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'socket:server {--host=127.0.0.1} {--port=8888}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'websocket服务';

    protected $sockets = [];

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
        $host = $this->option('host');
        $port = $this->option('port');

        $subject = new BehaviorSubject();
        $server = new SocketServer($host, $port, true);

        // 通过子进程订阅Redis
        $redis = new ProcessSubject('php artisan socket:redis');

        // WebSocket服务
        $server->subscribe(function (MessageSubject $messageSubject) use ($subject) {
            $subject->onNext(['from' => 'socket', 'type' => 'connected', 'data' => $messageSubject]);
            $messageSubject->subscribe(function ($message) use ($subject, $messageSubject) {
                $subject->onNext(['from' => 'socket', 'type' => 'data', 'data' => $message]);
            });
        }, function ($error) use ($subject) {
            $subject->onNext(['from' => 'socket', 'type' => 'error', 'data' => $error]);
        });

        // 订阅汇总
        $subject
            ->merge($redis->map(function ($json) {
                return json_decode($json, true);
            }))
            ->filter(function ($data) {
                return is_array($data) && array_key_exists('from', $data);
            })
            ->subscribe(function ($data) {
                switch ($data['from']) {
                    case 'socket':
                        switch ($data['type']) {
                            case 'connected':
                                array_push($this->sockets, $data['data']);
                                $data['data']->send('connected');
                                break;
                            case 'data':
                                foreach ($this->sockets as $socket) {
                                    $socket->send($data['data']);
                                }
                                break;
                        }
                        break;

                    case 'redis':
                        foreach ($this->sockets as $socket) {
                            $socket->send($data['data']);
                        }
                        break;
                }
                var_export(json_encode($data));
            });

        echo "Socket Server Running On {$host}:{$port}" . PHP_EOL;
    }
}
