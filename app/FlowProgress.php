<?php

namespace App;

use Auth;
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

    /**
     * 创建人
     * @param $value
     */
    public function setCreatedByAttribute($value)
    {
        $this->attributes['created_by'] = $value ?: Auth::User()->id;
    }

    /**
     * 修改人
     * @param $value
     */
    public function setUpdatedByAttribute($value)
    {
        $this->attributes['updated_by'] = $value ?: Auth::User()->id;
    }

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
