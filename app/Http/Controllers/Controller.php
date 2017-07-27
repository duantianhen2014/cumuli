<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * 操作成功返回
     *
     * @param array $data
     * @return \Illuminate\Http\JsonResponse
     */
    final protected function success(array $data = [])
    {
        return response()->json(array_merge([
            'status' => 'success',
            'message' => '操作成功',
        ], $data));
    }

    /**
     * 操作失败返回
     *
     * @param array $data
     * @return \Illuminate\Http\JsonResponse
     */
    final protected function error(array $data = [])
    {
        return response()->json(array_merge([
            'status' => 'error',
            'message' => '操作失败',
            'url' => app('request')->url(),
        ], $data));
    }
}
