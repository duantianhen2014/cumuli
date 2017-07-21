<?php

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;

class module extends GeneratorCommand
{

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'make:module';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new module';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Module';

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        return __DIR__ . '/stubs/controller.stub';
    }

    /**
     * Get the root namespace for the class.
     *
     * @return string
     */
    protected function rootNamespace()
    {
        return $this->type;
    }

    /**
     * Get the default namespace for the class.
     *
     * @param  string $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace;
    }

    /**
     * Build the class with the given name.
     *
     * Remove the base controller import if we are already in base namespace.
     *
     * @param  string $name
     * @return string
     */
    protected function buildClass($name)
    {
        $controllerNamespace = $this->getNamespace($name);

        $replace = [];

        $replace["use {$controllerNamespace}\Controller;\n"] = '';

        return str_replace(
            array_keys($replace), array_values($replace), parent::buildClass($name)
        );
    }

    /**
     * Get the full namespace for a given class, without the class name.
     *
     * @param  string $name
     * @return string
     */
    protected function getNamespace($name)
    {
        return trim(implode('\\', array_map(function ($str) {
            return studly_case(strtolower($str));
        }, explode('\\', $name))), '\\');
    }

    /**
     * Get the destination class path.
     *
     * @param  string $name
     * @return string
     */
    protected function getPath($name)
    {
        $name = str_replace_first($this->rootNamespace(), '', $name);

        return dirname($this->laravel['path']) . '/module/' . str_replace('\\', '/', $name) . '/src/Controller.php';
    }

    /**
     * Execute the console command.
     *
     * @return bool|null
     */
    public function fire()
    {
        $name = $this->qualifyClass($this->getNameInput());

        if (count(explode('\\', trim($name, '\/'))) != 3) {
            $this->error($this->type . ' name error!');
            return false;
        }

        $path = $this->getPath($name);
        $view = dirname(dirname($path)) . '/views/index.blade.php';
        $viewCreate = dirname(dirname($path)) . '/views/create.blade.php';
        $viewUpdate = dirname(dirname($path)) . '/views/update.blade.php';
        $composer = dirname(dirname($path)) . '/composer.json';

        // First we will check to see if the class already exists. If it does, we don't want
        // to create the class and overwrite the user's code. So, we will bail out so the
        // code is untouched. Otherwise, we will continue generating this class' files.
        if ($this->alreadyExists($this->getNameInput())) {
            $this->error($this->type . ' already exists!');

            return false;
        }

        // Next, we will generate the path to the location where this class' file should get
        // written. Then, we will build the class and make the proper replacements on the
        // stub files so that it gets the correctly formatted namespace and class name.
        $this->makeDirectory($path);
        $this->makeDirectory($view);

        $this->files->put($path, $this->buildClass($name));
        $this->files->put($view, $this->getNameInput());
        $this->files->put($viewCreate, 'create');
        $this->files->put($viewUpdate, 'update');
        $this->files->put($composer, str_replace('\/', '/', $this->unicodeDecode(json_encode([
            'name' => strtolower($this->getNameInput()),
            'description' => 'Cumuli系统功能模块',
            'type' => 'cumuli-module',
            'autoload' => [
                'psr-4' => [
                    $this->getNamespace($name) => 'src/'
                ]
            ],
            'extra' => [
                'module' => [
                    'name' => '模块名称',
                    'icon' => 'fa fa-puzzle-piece',
                ],
                'menu' => [
                    '查看' => [
                        'action' => ['getIndex', 'postIndex'],
                        'icon' => 'fa fa-list-alt'
                    ],
                    '新增' => [
                        'action' => ['getCreate', 'postCreate'],
                        'icon' => 'fa fa-plus-circle'
                    ],
                    '编辑' => [
                        'action' => ['getUpdate', 'postUpdate'],
                        'icon' => 'fa fa-circle'
                    ],
                    '删除' => [
                        'action' => ['postDelete'],
                        'icon' => 'fa fa-minus-circle'
                    ],
                ]
            ]
        ], JSON_PRETTY_PRINT))));

        @shell_exec('composer dumpautoload');
        $this->info($this->type . ' created successfully.');
        return true;
    }

    // 处理json_encode中的中文编码问题
    private function unicodeDecode($str)
    {
        return preg_replace_callback(
            '/\\\\u([0-9a-f]{4})/i',
            create_function(
                '$matches',
                'return mb_convert_encoding(pack("H*", $matches[1]), "UTF-8", "UCS-2BE");'
            ),
            $str
        );
    }

}
