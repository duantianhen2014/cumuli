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
        $this->files->put($view, 'success');
        $this->files->put($composer, str_replace("\\/", "/", json_encode([
            "name" => strtolower($this->getNameInput()),
            "description" => 'cumuli module',
            "type" => "cumuli-module",
            "autoload" => [
                "psr-4" => [
                    $this->getNamespace($name) => "src/"
                ]
            ]
        ], JSON_PRETTY_PRINT)));

        $this->info($this->type . ' created successfully.');
        $this->call('composer dumpautoload');
        return true;
    }

}
