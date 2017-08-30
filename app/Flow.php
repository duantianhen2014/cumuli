<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flow extends Model
{
    protected $fillable = [
        'name', 'code', 'description', 'success', 'fail',
    ];

    /**
     * 唯一编号
     * @param $value
     */
    public function setCodeAttribute($value)
    {
        $this->attributes['code'] = $value ?: bin2hex(random_bytes(5));
    }

    /**
     * 一对多关联
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function details()
    {
        return $this->hasMany('App\FlowDetail');
    }

    /**
     * 多对多的多态关联
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
//    public function leaves()
//    {
//        return $this->morphedByMany('App\Leave', 'task', 'flow_progresses');
//    }
}
