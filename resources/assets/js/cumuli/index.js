require('./event');
require('./method');

// 默认设置
(function ($) {

  // ajax默认设置
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

  // 拦截ajax错误返回
  $(document).ajaxError((...xhr) => {
    if (xhr[2].type.toUpperCase() == 'GET') {
      typeof xhr[2].success == 'function' && xhr[2].success(`
<div class="easyui-panel error" data-options="fit:true,title:'访问出错了',iconCls:'fa fa-warning',border:false" style="padding: 0 20px">
  <h2>:(</h2>
  <p>错误码：　${xhr[1].status}</p>
  <p>错误信息：${xhr[1].statusText}</p>
</div>`);
    } else {
      typeof xhr[2].success == 'function' && xhr[2].success({
        status: 'error',
        code: xhr[1].status,
        message: xhr[1].statusText,
        total: 0,
        rows: []
      });
    }

    // 未登录时跳转到首页
    if (xhr[1].status == 401) {
      window.location.href = '/';
    }
  });

  $(document).ready(() => {
    $('body > .panel-loading:first').remove();   // 移除加载效果
  });

})(jQuery);
