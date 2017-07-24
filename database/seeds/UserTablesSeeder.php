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
        DB::table('users')->insert([
            'id' => 1,
            'name' => 'wangdong',
            'email' => 'mail@wangdong.io',
            'password' => bcrypt('wangdong'),
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
