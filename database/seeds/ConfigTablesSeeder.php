<?php

use Illuminate\Database\Seeder;

class ConfigTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('configs')->insert([
            [
                'group' => '默认页面',
                'name' => '顶部菜单',
                'key' => 'module.page.north',
                'value' => json_encode(config('module.page.north')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'group' => '默认页面',
                'name' => '左侧菜单',
                'key' => 'module.page.west',
                'value' => json_encode(config('module.page.west')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'group' => '默认页面',
                'name' => '首页展示',
                'key' => 'module.page.dashboard',
                'value' => json_encode(config('module.page.dashboard')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
        ]);
    }
}
