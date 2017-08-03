<?php

namespace Module\System\Page;

use Auth;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller as AppController;

class Controller extends AppController
{

    /**
     * 仪表盘
     *
     * @return \Illuminate\View\View
     */
    public function getDashboard()
    {
        return view('dashboard');
    }

    public function getEdit()
    {
        return view('edit', ['user' => Auth::user()]);
    }

    public function postEdit(Request $request)
    {
        $user = Auth::user();
        $user->name = $request->input('name');
        $user->email = $request->input('email');

        return $user->save() ? $this->success('修改成功') : $this->error('修改失败');
    }

    public function getPassword()
    {
        return view('password');
    }

    public function postPassword(Request $request)
    {
        $current = $request->input('current');

        $exists = Auth::once(['email' => Auth::user()->email, 'password' => $current]);
        if (!$exists) {
            return $this->error('密码不正确');
        }

        $user = Auth::user();
        $user->password = $request->input('password');

        return $user->save() ? $this->success('修改成功') : $this->error('修改失败');
    }

    public function getProfile()
    {
        return view('profile', ['user' => Auth::user()]);
    }

    /**
     * 左侧菜单
     *
     * @return \Illuminate\View\View
     */
    public function getWest()
    {
        $modules = modules()
            ->filter(function ($module) {
                return array_has($module, 'composer.extra.module.module.action');
            })
            ->sortBy('composer.name')
            ->map(function ($module) {
                $action = module_action(array_get($module, 'composer.extra.module.module.action'), $module);
                return [
                    'group' => array_get($module, 'group'),
                    'module' => array_get($module, 'module'),
                    'access' => array_get($action, 'title'),
                    'href' => array_get($action, 'url'),
                    'text' => array_get($module, 'composer.extra.module.module.title', array_get($action, 'title')),
                    'title' => array_get($module, 'composer.extra.module.module.title', array_get($action, 'title')),
                    'iconCls' => array_get($module, 'composer.extra.module.module.icon', array_get($action, 'icon')),
                ];
            })
            // 权限验证
            ->filter(function ($module) {
                return accesses()->search(function ($item) use ($module) {
                        return in_array($item->group, ['*', array_get($module, 'group')]) &&
                            in_array($item->module, ['*', array_get($module, 'module')]) &&
                            in_array($item->access, ['*', array_get($module, 'access')]);
                    }) !== false;
            })
            ->groupBy('group')
            ->toArray();

        return view('west', ['modules' => $modules]);
    }

    /**
     * 获取hash地址信息
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|void
     */
    public function postHash(Request $request)
    {
        $path = $request->input('path');
        $module = module($path);

        if (!$module) {
            return abort(404);
        }

        return $this->success([
            'title' => array_get($module, 'composer.extra.module.module.title', '直接访问'),
            'href' => array_get($module, 'url'),
            'iconCls' => array_get($module, 'composer.extra.module.module.icon', 'fa fa-hashtag'),
        ]);
    }

    /**
     * 验证邮箱是否存在 TODO 比较特殊的情况,返回字符类型的 true|false
     *
     * @param Request $request
     * @param User $user
     * @return string
     */
    public function postExistsEmail(Request $request, User $user)
    {
        $email = $request->input('email');

        // 过滤默认值的情况
        if ($request->has('current') && $request->input('current') == $email) {
            $exists = false;
        } else {
            $exists = $user->where('email', $email)->exists();
        }

        // 颠倒返回结果
        if ($request->has('reverse')) {
            $exists = !$exists;
        }

        return var_export($exists, true);
    }

}
