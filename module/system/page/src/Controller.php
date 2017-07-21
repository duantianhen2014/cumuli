<?php

namespace Module\System\Page;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as AppController;

class Controller extends AppController
{

    /**
     * 仪表盘
     *
     * @return \Illuminate\View\View
     */
    public function getDashboard()
    {
        return view('dashboard');
    }

    /**
     * 左侧菜单
     *
     * @return \Illuminate\View\View
     */
    public function getWest()
    {
        return view('west');
    }

}
