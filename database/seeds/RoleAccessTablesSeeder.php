<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleAccessTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('role_accesses')->insert([
            'id' => 1,
            'role_id' => 1,
            'group' => '*',
            'module' => '*',
            'action' => '*',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
