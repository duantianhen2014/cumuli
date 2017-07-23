<?php

namespace App\Console\Commands\module;

use Illuminate\Console\Command;

class deploy extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:deploy';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '项目部署命令，比如代码检查，更新缓存等';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->line('生成模块缓存文件');
        $this->call('module:cache');

        $this->line('更新模板缓存');
        $this->call('view:clear');

        $this->line('更新路由缓存');
        $this->call('route:clear');

        $this->line('更新配置缓存');
        $this->call('config:clear');

        $this->line('更新应用缓存');
        $this->call('cache:clear');
    }
}
