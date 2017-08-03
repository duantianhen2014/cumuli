<?php

namespace App;

use Auth;
use App\User;
use Illuminate\Database\Eloquent\Model;

class UserSocialite extends Model
{

    protected $fillable = [
        'unique_id', 'driver', 'name', 'nickname', 'email', 'avatar', 'data',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    public function setDataAttribute($value)
    {
        $this->attributes['data'] = json_encode($value);
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function login($socialite, $driver = 'github')
    {
        // 已关联本地用户
        $row = $this->where('unique_id', $socialite->id)->where('driver', $driver)->first();
        if ($row) {
            // 关联成功，直接登录
            if ($row->user) {
                return Auth::login($row->user, true);
            }

            // 删除无效关联
            $row->delete();
        }

        // 创建本地用户
        $user = User::where('email', $socialite->email)->first();
        if (!$user) {
            $user = new User([
                'name' => $socialite->name,
                'email' => $socialite->email,
            ]);
            $user->save();
        }

        // 保存第三方登录信息
        $user->socialites()->create([
            'unique_id' => $socialite->id,
            'driver' => $driver,
            'name' => $socialite->name,
            'nickname' => $socialite->nickname,
            'email' => $socialite->email,
            'avatar' => $socialite->avatar,
            'data' => $socialite->user,
        ]);

        return Auth::login($user, true);
    }
}
