<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlowDetail extends Model
{
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
