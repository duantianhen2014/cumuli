<?php

namespace App;

use App\Events\ConfigChangedEvent;
use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
    protected $fillable = [
        'group', 'name', 'key', 'value', 'editor',
    ];

    // 查询时自动转换类型
    protected $casts = [
        'editor' => 'array',
    ];

    /**
     * 当配置发生变化时触发事件
     * @var array
     */
    protected $events = [
        'saved' => ConfigChangedEvent::class,
        'deleted' => ConfigChangedEvent::class,
    ];

    public function getValueAttribute($value)
    {
        return json_decode($value, true);
    }

    public function setValueAttribute($value)
    {
        $this->attributes['value'] = json_encode($value);
    }
}
