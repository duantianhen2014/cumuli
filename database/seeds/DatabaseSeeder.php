<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleTablesSeeder::class);       // 添加默认角色
        $this->call(UserTablesSeeder::class);       // 添加默认用户
        $this->call(RoleAccessTablesSeeder::class); // 添加角色默认权限
        $this->call(UserRoleTablesSeeder::class);   // 添加用户默认角色
    }
}
