<?php

namespace App\Console\Commands\deploy;

use Illuminate\Console\Command;

class menu extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'deploy:menu';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '生成菜单缓存文件';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('deploy:module');

        $modules = collect(json_decode(file_get_contents(base_path('module/module.json')), true));

        dd($modules);
    }
}
