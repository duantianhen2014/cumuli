<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoleAccess extends Model
{
    protected $fillable = [
        'group', 'module', 'access',
    ];

    public function role()
    {
        return $this->belongsTo('App\Role');
    }
}
