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
                'group' => '系统设置',
                'name' => '系统名称',
                'key' => 'app.name',
                'value' => json_encode(config('app.name')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'group' => '系统设置',
                'name' => '系统图标',
                'key' => 'app.icon',
                'value' => json_encode(config('app.icon')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'group' => '系统设置',
                'name' => '系统版本',
                'key' => 'app.version',
                'value' => json_encode(config('app.version')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'group' => '系统设置',
                'name' => '版权信息',
                'key' => 'app.copyright',
                'value' => json_encode(config('app.copyright')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
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
                'name' => 'HASH地址',
                'key' => 'module.page.hash',
                'value' => json_encode(config('module.page.hash')),
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
            [
                'group' => '前端配置',
                'name' => '上传地址',
                'key' => 'module.config.upload.url',
                'value' => json_encode(config('module.config.upload.url')),
                'editor' => json_encode(['type' => 'textbox']),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
        ]);
    }
}
