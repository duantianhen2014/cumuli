<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlowProgress extends Model
{
    protected $fillable = [
        'progress', 'status', 'log',
    ];

    // 查询时自动转换类型
    protected $casts = [
        'log' => 'array',
    ];

    /**
     * 普通多态关联
     */
    public function task()
    {
        return $this->morphTo();
    }

}
