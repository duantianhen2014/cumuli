<?php

namespace App;

use App\Events\FlowProgressChangeEvent;
use App\Events\FlowProgressChangedEvent;
use Illuminate\Database\Eloquent\Model;

class FlowProgress extends Model
{
    protected $fillable = [
        'flow_id', 'progress', 'status', 'log', 'created_by', 'updated_by',
    ];

    // 查询时自动转换类型
    protected $casts = [
        'progress' => 'integer',
        'log' => 'array',
    ];

    // 事件监听
    protected $events = [
        'updating' => FlowProgressChangeEvent::class, // 记录日志等
        'updated' => FlowProgressChangedEvent::class, // 触发钩子等
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
