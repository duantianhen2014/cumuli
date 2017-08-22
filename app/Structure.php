<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Structure extends Model
{
    protected $fillable = [
        'name', 'description', 'parent_id',
    ];

    // 追加字段
    protected $appends = [
        'iconCls'
    ];

    /**
     * 自定义图标
     * @return string
     */
    public function getIconClsAttribute()
    {
        return 'fa fa-folder-o';
    }

    /**
     * 多对多关联
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\User', 'structure_users');
    }

    /**
     * 上下级关联
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function child()
    {
        return $this->hasMany('App\Structure', 'parent_id', 'id');
    }

    /**
     * 递归查询
     * @return $this
     */
    public function children()
    {
        return $this->child()->with('children');
    }

}
