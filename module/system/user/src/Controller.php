<?php

namespace Module\System\User;

use App\User;
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
        return view('index', ['action' => module_action(__FUNCTION__)]);
    }

    /**
     * POST请求入口页面
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postIndex(Request $request, User $user)
    {
        // 字段筛选
        $filterRules = collect(json_decode($request->input('filterRules', '[]'), true));
        $filterRules->each(function ($rule) use (&$user) {
            $field = array_get($rule, 'field');
            $value = array_get($rule, 'value');
            $op = array_get($rule, 'op');

            switch ($op) {
                case 'contains':
                    $value = str_replace('%', '\%', $value);
                    $user = $user->where($field, 'like', "%{$value}%");
                    break;
                case 'beginwith':
                    $value = str_replace('%', '\%', $value);
                    $user = $user->where($field, 'like', "{$value}%");
                    break;
                case 'endwith':
                    $value = str_replace('%', '\%', $value);
                    $user = $user->where($field, 'like', "%{$value}");
                    break;
                case 'equal':
                    $user = $user->where($field, $value);
                    break;
                case 'notequal':
                    $user = $user->where($field, '<>', $value);
                    break;
                case 'less':
                    $value = intval($value);
                    $user = $user->where($field, '<', $value);
                    break;
                case 'lessorequal':
                    $value = intval($value);
                    $user = $user->where($field, '<=', $value);
                    break;
                case 'greater':
                    $value = intval($value);
                    $user = $user->where($field, '>', $value);
                    break;
                case 'greaterorequal':
                    $value = intval($value);
                    $user = $user->where($field, '>=', $value);
                    break;
            }
        });

        // 支持多个字段排序
        $sorts = collect(explode(',', $request->input('sort', 'id')));
        $orders = collect(explode(',', $request->input('order', 'desc')));
        $orders->each(function ($order, $key) use (&$user, $sorts) {
            $user = $user->orderBy($sorts->get($key), $order);
        });

        // 分页
        $rows = $user->paginate($request->input('rows', 20));

        return $this->success([
            'total' => $rows->total(),
            'rows' => $rows->items(),
        ]);
    }

    /**
     * GET请求新增页面
     *
     * @return \Illuminate\View\View
     */
    public function getCreate()
    {
        return view('create');
    }

    /**
     * 处理新增数据
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postCreate(Request $request)
    {
        $user = new User($request->only(['name', 'email', 'password']));
        $status = $user->save();

        // 更新中间表
        if ($status && $request->has('role')) {
            $user->roles()->attach(array_unique($request->input('role')));
        }

        return $status ? $this->success('添加成功') : $this->error('添加失败');
    }

    /**
     * GET请求编辑页面
     *
     * @return \Illuminate\View\View
     */
    public function getUpdate()
    {
        return view('update');
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

    /**
     * POST请求删除页面
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postDelete(Request $request)
    {
        return $this->error([
            'message' => '功能完善中'
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
        $reverse = $request->input('reverse', false); // 是否颠倒返回结果
        $exists = $user->where('email', $email)->exists();
        if ($reverse) {
            $exists = !$exists;
        }
        return var_export($exists, true);
    }
}
