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
                'name' => '首页展示',
                'key' => 'module.page.dashboard',
                'value' => json_encode(config('module.page.dashboard')),
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
                'name' => '个人信息',
                'key' => 'module.page.profile',
                'value' => json_encode(config('module.page.profile')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ], [
                'group' => '默认页面',
                'name' => '修改资料',
                'key' => 'module.page.edit',
                'value' => json_encode(config('module.page.edit')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'group' => '默认页面',
                'name' => '修改密码',
                'key' => 'module.page.password',
                'value' => json_encode(config('module.page.password')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
        ]);
    }
}
