<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlowDetail extends Model
{
    protected $fillable = [
        'form', 'view', 'success', 'fail', 'check',
    ];

    // 查询时自动转换类型
    protected $casts = [
        'check' => 'array',
    ];

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
