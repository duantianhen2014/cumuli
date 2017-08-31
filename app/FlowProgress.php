<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlowProgress extends Model
{
    protected $fillable = [
        'flow_id', 'progress', 'status', 'log',
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

    /**
     * 一对多反向关联
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function flow()
    {
        return $this->belongsTo('App\Flow');
    }

}
