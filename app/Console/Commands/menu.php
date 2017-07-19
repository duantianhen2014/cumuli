<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class menu extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'menu:cache';

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
    public function handle(Filesystem $fs)
    {
        $files = $fs->glob('module/*/*/src/Controller.php');
        $names = collect($files)
            ->map(function ($file) use ($fs) {
                $info = explode('/', $file, 4);
                $name = array_splice($info, 1, 2);
                $composer = base_path("module/{$name[0]}/{$name[1]}/composer.json");
                $config = $fs->exists($composer) ? $fs->get($composer) : null;

                return ['name' => $name, 'config' => json_decode($config, true)];
            });

        var_export($names);
    }
}
