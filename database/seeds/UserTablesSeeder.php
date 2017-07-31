<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        defined('INSTALL_NAME') or define('INSTALL_NAME', 'wangdong');
        defined('INSTALL_EMAIL') or define('INSTALL_EMAIL', 'mail@wangdong.io');
        defined('INSTALL_PASSWORD') or define('INSTALL_PASSWORD', 'wangdong');

        DB::table('users')->insert([
            'id' => 1,
            'name' => INSTALL_NAME,
            'email' => INSTALL_EMAIL,
            'password' => bcrypt(INSTALL_PASSWORD),
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
