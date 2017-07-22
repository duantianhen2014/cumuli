// 默认设置
(function ($) {

  // ajax默认设置
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },

    success: function (data, status, xhr) {
      if (this.type.toUpperCase() != 'GET') {
        if (data.status == 'error') {
          return $.cumuli.message.show(data.message, 'error');
        }
        $.cumuli.message.show('操作成功', 'info');
      }
    },

    beforeSend: function () {
      if (this.type.toUpperCase() != 'GET') {
        $.messager.progress({text: '处理中，请稍候...'});
      }
    },

    complete: function () {
      if (this.type.toUpperCase() != 'GET') {
        $.messager.progress('close');
      }
    },

    statusCode: {
      401: () => {
        window.location.href = '/';
      }
    }
  });

  // 拦截ajax错误返回
  $(document).ajaxError((...xhr) => {
    console.log('ajaxError', xhr);
    if (xhr[2].type.toUpperCase() == 'GET') {
      return typeof xhr[2].success == 'function' && xhr[2].success(
          `<div class="easyui-panel error" data-options="fit:true,title:'访问出错了',iconCls:'fa fa-warning',border:false" style="padding: 0 20px">
            <h2>:(</h2>
            <p>错误码：　${xhr[1].status}</p>
            <p>错误信息：${xhr[1].statusText}</p>
          </div>`
        );
    } else {
      // 如果有json返回，则获取json内容
      let message = xhr[1].statusText;
      if (typeof xhr[1].responseJSON == 'object') {
        for (let key in xhr[1].responseJSON) {
          message = xhr[1].responseJSON[key];
          break;
        }
      }

      typeof xhr[2].success == 'function' && xhr[2].success({
        status: 'error',
        code: xhr[1].status,
        statusText: xhr[1].statusText,
        message: message,
        total: 0,
        rows: []
      });
    }
  });

  $(document).ready(() => {
    $('body > .panel-loading:first').remove();   // 移除加载效果
  });

})(jQuery);
