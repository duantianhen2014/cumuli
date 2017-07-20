<?php

namespace Module\System\Dashboard;

use App\Http\Controllers\Controller as AppController;

class Controller extends AppController
{
    /**
     * 仪表盘
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('index');
    }

}
