<?php

namespace Module\System\Config;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as AppController;

class Controller extends AppController
{

    /**
     * GET请求入口页面
     *
     * @return \Illuminate\View\View
     */
    public function getIndex()
    {
        return view('index', ['module' => module()]);
    }

    /**
     * POST请求入口页面
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postIndex(Request $request)
    {
        $config = config('module');

        return $this->success([
            'total' => 1,
            'rows' => [
                [
                    'group' => '默认页面',
                    'name' => '首页展示',
                    'editor' => 'text',
                    'key' => 'module.page.dashboard',
                    'value' => config('module.page.dashboard'),
                ],
                [
                    'group' => '默认页面',
                    'name' => '左侧菜单',
                    'editor' => 'text',
                    'key' => 'module.page.west',
                    'value' => config('module.page.west'),
                ],
                [
                    'group' => '默认页面',
                    'name' => '个人信息',
                    'editor' => 'text',
                    'key' => 'module.page.profile',
                    'value' => config('module.page.profile'),
                ],
                [
                    'group' => '默认页面',
                    'name' => '修改密码',
                    'editor' => 'text',
                    'key' => 'module.page.password',
                    'value' => config('module.page.password'),
                ],
                [
                    'group' => '文件上传',
                    'name' => '上传驱动',
                    'editor' => ['type' => 'combobox', 'options' => ['editable' => false, 'multiple' => false, 'data' => [
                        ['text' => '本地上传', 'value' => 'local'],
                    ]]],
                    'key' => 'module.upload.driver',
                    'value' => config('module.upload.driver'),
                ],
                [
                    'group' => '文件上传',
                    'name' => '文件大小',
                    'editor' => ['type' => 'numberspinner', 'options' => ['min' => 0]],
                    'key' => 'module.upload.size',
                    'value' => config('module.upload.size'),
                ],
                [
                    'group' => '文件上传',
                    'name' => '扩展限制',
                    'editor' => array('type' => 'combobox', 'options' => array('editable' => false, 'multiple' => true, 'data' => array(
                        array('text' => 'png', 'value' => 'png'),
                        array('text' => 'jpg', 'value' => 'jpg'),
                        array('text' => 'jpeg', 'value' => 'jpeg'),
                        array('text' => 'gif', 'value' => 'gif'),
                        array('text' => 'bmp', 'value' => 'bmp'),
                        array('text' => 'flv', 'value' => 'flv'),
                        array('text' => 'swf', 'value' => 'swf'),
                        array('text' => 'mkv', 'value' => 'mkv'),
                        array('text' => 'avi', 'value' => 'avi'),
                        array('text' => 'rm', 'value' => 'rm'),
                        array('text' => 'rmvb', 'value' => 'rmvb'),
                        array('text' => 'mpeg', 'value' => 'mpeg'),
                        array('text' => 'mpg', 'value' => 'mpg'),
                        array('text' => 'ogg', 'value' => 'ogg'),
                        array('text' => 'ogv', 'value' => 'ogv'),
                        array('text' => 'mov', 'value' => 'mov'),
                        array('text' => 'wmv', 'value' => 'wmv'),
                        array('text' => 'mp4', 'value' => 'mp4'),
                        array('text' => 'webm', 'value' => 'webm'),
                        array('text' => 'mp3', 'value' => 'mp3'),
                        array('text' => 'wav', 'value' => 'wav'),
                        array('text' => 'mid', 'value' => 'mid'),
                        array('text' => 'rar', 'value' => 'rar'),
                        array('text' => 'zip', 'value' => 'zip'),
                        array('text' => 'tar', 'value' => 'tar'),
                        array('text' => 'gz', 'value' => 'gz'),
                        array('text' => '7z', 'value' => '7z'),
                        array('text' => 'bz2', 'value' => 'bz2'),
                        array('text' => 'cab', 'value' => 'cab'),
                        array('text' => 'iso', 'value' => 'iso'),
                        array('text' => 'doc', 'value' => 'doc'),
                        array('text' => 'docx', 'value' => 'docx'),
                        array('text' => 'xls', 'value' => 'xls'),
                        array('text' => 'xlsx', 'value' => 'xlsx'),
                        array('text' => 'ppt', 'value' => 'ppt'),
                        array('text' => 'pptx', 'value' => 'pptx'),
                        array('text' => 'pdf', 'value' => 'pdf'),
                        array('text' => 'txt', 'value' => 'txt'),
                        array('text' => 'md', 'value' => 'md'),
                        array('text' => 'xml', 'value' => 'xml'),
                    ))),
                    'key' => 'module.upload.exts',
                    'value' => implode(',', config('module.upload.exts')),
                ],
            ],
        ]);
    }

    /**
     * POST请求编辑页面
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postUpdate(Request $request)
    {
        return $this->error([
            'message' => '功能完善中'
        ]);
    }

}
