<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlowProgress extends Model
{
    /**
     * 普通多态关联
     */
    public function task()
    {
        return $this->morphTo();
    }

}
