<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use Notifiable;

    protected $fillable = [
        'name', 'description',
    ];

    /**
     * 多对多关联
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\User', 'role_users');
    }

    /**
     * 一对多关联
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function accesses()
    {
        return $this->hasMany('App\RoleAccess');
    }
}
