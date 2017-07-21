<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'wangdong',
            'email' => 'mail@wangdong.io',
            'password' => bcrypt('wangdong'),
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
