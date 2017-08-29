<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlowDetail extends Model
{
    protected $fillable = [
        'check', 'form', 'view', 'success', 'fail', 'order_by',
    ];

    /**
     * 获取审核人信息
     * @param $value
     * @return array
     */
    public function getCheckAttribute($value)
    {
        $check = json_decode($value, true);

        if (empty($check['users']) || !is_array($check['users'])) {
            $check['users'] = [0];
        }
        if (empty($check['roles']) || !is_array($check['roles'])) {
            $check['roles'] = [0];
        }
        if (empty($check['structures']) || !is_array($check['structures'])) {
            $check['structures'] = [0];
        }

        $check['users'] = User::whereIn('id', $check['users'])->get();
        $check['roles'] = Role::whereIn('id', $check['roles'])->get();
        $check['structures'] = Structure::whereIn('id', $check['structures'])->get();
        return $check;
    }

    /**
     * 审核人
     * @param $value
     */
    public function setCheckAttribute($value)
    {
        $this->attributes['check'] = json_encode($value);
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
