require('./event');
require('./method');

// 默认设置
(function ($) {

  // ajax默认设置
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },

    statusCode: {
      401: function () {
        window.location.href = '/';
      }
    }
  });

  // 拦截ajax错误返回
  $(document).ajaxError((...xhr) => {
    const data = xhr[2].type.toUpperCase() == 'GET' ? `<div class="easyui-panel error" data-options="fit:true,title:'访问出错了',iconCls:'fa fa-warning',border:false" style="padding: 0 20px">
        <h2>:(</h2>
        <p>错误码：　${xhr[1].status}</p>
        <p>错误信息：${xhr[1].statusText}</p>
      </div>` : {status: 'error', code: xhr[1].status, message: xhr[1].statusText, total: 0, rows: []};

    typeof xhr[2].success == 'function' && xhr[2].success(data);
  });

  $(document).ready(() => {
    $('body > .panel-loading:first').remove();   // 移除加载效果
  });

})(jQuery);
