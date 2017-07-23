<?php

namespace App\Console\Commands\module;

use Illuminate\Console\Command;

class cache extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:cache';

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
            ->keyBy('name');

        $bar->finish();

        $this->line('');
        $this->line('生成语言文件 lang/[en|zh_CN]/module.php:');
        $lang = $modules
            ->pluck('group')
            ->keyBy(function ($key) {
                return $key;
            })
            ->toArray();
        $en = array_merge($lang, require resource_path('lang/en/module.php'));
        $zh = array_merge($lang, require resource_path('lang/zh_CN/module.php'));

        file_put_contents(resource_path('lang/en/module.php'), "<?php\n\nreturn " . var_export($en, true) . ";\n");
        file_put_contents(resource_path('lang/zh_CN/module.php'), "<?php\n\nreturn " . var_export($zh, true) . ";\n");

        $this->line('');
        $this->line('保存模块信息: ' . base_path('module/module.json'));
        file_put_contents(base_path('module/module.json'), $modules->toJson(JSON_UNESCAPED_UNICODE));

        $this->info('模块缓存更新成功');
    }
}
