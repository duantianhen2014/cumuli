<?php

namespace Module\System\Dashboard;

use App\Http\Controllers\Controller as AppController;

class Controller extends AppController
{
    /**
     * 仪表盘
     * @return \Illuminate\View\View
     */
    public function getIndex()
    {
        return view('index');
    }

}
