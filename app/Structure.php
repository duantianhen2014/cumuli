<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Structure extends Model
{
    use Notifiable;

    protected $fillable = [
        'name', 'description', 'parent_id',
    ];

    // 追加字段
    protected $appends = [
        'iconCls',
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

    /**
     * 包含子节点操作
     *
     * @return $this
     */
    public function withChildren()
    {
        $ids = [$this->id]; // 当前ID

        // 遍历获取ID
        $children = $this->children;
        while ($children->count()) {
            $collect = collect([]);
            $children->each(function ($child) use (&$ids, &$collect) {
                array_push($ids, $child->id);
                $collect = $collect->merge($child->children);
            });
            $children = $collect;
        }

        return $this->whereIn('id', $ids);
    }

    /**
     * 验证上级菜单是否正确
     * @param int $parentId
     * @return bool
     */
    public function isParent($parentId = 0)
    {
        $ids = [$this->id]; // 当前ID

        // 遍历获取ID
        $children = $this->children;
        while ($children->count()) {
            $collect = collect([]);
            $children->each(function ($child) use (&$ids, &$collect) {
                array_push($ids, $child->id);
                $collect = $collect->merge($child->children);
            });
            $children = $collect;
        }

        return !in_array($parentId, $ids);
    }

}
