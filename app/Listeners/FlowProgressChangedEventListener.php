<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Log;
use App\Events\FlowProgressChangedEvent;

class FlowProgressChangedEventListener
{

    private $model;
    private $flow;
    private $details;
    private $detail;

    /**
     * url地址追加参数然后触发
     * @param $url
     */
    private function hook($url)
    {
        $url .= (str_contains($url, '?') ? '&' : '?') . http_build_query([
                'append' => [
                    'flow_id' => $this->model->flow_id,
                    'detail_id' => $this->detail->id,
                    'progress_id' => $this->model->id,
                    'task_id' => $this->model->task_id,
                ]
            ]);

        Log::debug($url);
    }

    /**
     * Handle the event.
     *
     * @param  FlowProgressChangedEvent $event
     * @return void
     */
    public function handle(FlowProgressChangedEvent $event)
    {
        $this->model = $event->model;

        $this->flow = $this->model->flow;
        $this->details = $this->flow->details;

        $urls = [];

        switch ($this->model->status) {
            case 'success':
                $this->detail = $this->details->get($this->model->progress);

                if ($this->detail->success) array_push($urls, $this->detail->success);
                if ($this->flow->success) array_push($urls, $this->flow->success);
                break;
            case 'fail':
                $this->detail = $this->details->get($this->model->progress);

                if ($this->detail->fail) array_push($urls, $this->detail->fail);
                if ($this->flow->fail) array_push($urls, $this->flow->fail);
                break;
            case 'wait':
                $this->detail = $this->details->get($this->model->progress - 1);

                if ($this->detail->success) array_push($urls, $this->detail->success);
                break;
            case 'back':
                $this->detail = $this->details->get($this->model->progress + 1);
                break;
        }

        // 触发钩子
        array_map(function ($url) {
            $this->hook($url);
        }, $urls);
    }
}
