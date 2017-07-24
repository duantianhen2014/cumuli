<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'id' => 1,
            'name' => '管理员',
            'description' => '系统管理员',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
