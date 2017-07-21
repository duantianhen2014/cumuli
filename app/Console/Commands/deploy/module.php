<?php

namespace App\Console\Commands\deploy;

use Illuminate\Console\Command;

class module extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'deploy:module';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '生成模块缓存文件';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->line('执行[composer dumpautoload]命令:');
        @shell_exec('composer dumpautoload');

        // 获取当前正常使用的所有模块
        $modules = collect(require base_path('vendor/composer/autoload_classmap.php'))
            ->filter(function ($filename, $namespace) {
                return starts_with($namespace, 'Module\\') && ends_with($filename, 'Controller.php');
            });

        $this->line('');
        $this->line('读取模块信息:');
        $bar = $this->output->createProgressBar($modules->count());

        $modules = $modules->map(function ($filename, $namespace) use ($bar) {
            $info = collect(explode('\\', $namespace));
            $module = implode('/', [snake_case($info->get(1)), snake_case($info->get(2))]);

            $bar->advance();
            return module($module);
        })
            ->filter(function ($module) {
                return !is_null($module);
            })
            ->keyBy('module');

        $bar->finish();
        $this->line('');
        $this->line('');

        $this->line('保存模块信息: ' . base_path('module/module.json'));
        file_put_contents(base_path('module/module.json'), $modules->toJson(JSON_UNESCAPED_UNICODE));

        $this->info('模块缓存更新成功');
    }
}
