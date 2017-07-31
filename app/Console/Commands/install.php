<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class install extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '初始化安装';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if (!$this->confirm('将初始化所有数据，是否继续安装？')) {
            return $this->info('已退出安装');
        }

        $name = $this->ask('请输入管理员名称');

        if (strlen($name) < 2 || strlen($name) > 20) {
            return $this->error('名称为2-20个字符');
        }

        $email = $this->ask('请输入管理员邮箱');

        if (!preg_match("/^[\w-]+@[\w-]+[\w-\.]+$/", $email)) {
            return $this->error('邮箱格式不正确');
        }

        $password = $this->secret('请输入管理员密码');
        $password2 = $this->secret('确认管理员密码');

        if ($password != $password2) {
            return $this->error('两次密码不一致');
        }

        if (preg_match("/^\w{6, 20}$/", $password)) {
            return $this->error('不能使用特殊字符，并且长度为6-20个字符');
        }

        defined('INSTALL_NAME') or define('INSTALL_NAME', $name);
        defined('INSTALL_EMAIL') or define('INSTALL_EMAIL', $email);
        defined('INSTALL_PASSWORD') or define('INSTALL_PASSWORD', $password);

        $this->call('key:generate');
        $this->call('migrate:refresh', ['--seed' => true]);
        $this->call('module:cache');

        $this->info('安装成功');
    }
}
