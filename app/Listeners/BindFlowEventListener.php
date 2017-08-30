<?php

namespace App\Listeners;

use App\Flow;
use App\Events\BindFlowEvent;

class BindFlowEventListener
{
    /**
     * 绑定工作流
     * @param BindFlowEvent $event
     */
    public function handle(BindFlowEvent $event)
    {
        $model = $event->model;
        if ($model->flowCode) {
            $flow = Flow::where('code', $model->flowCode)->first();

            // 绑定数据
            if ($flow && method_exists($model, 'progresses')) {
                $model->progresses()->create(['flow_id' => $flow->id]);
            }
        }
    }
}
