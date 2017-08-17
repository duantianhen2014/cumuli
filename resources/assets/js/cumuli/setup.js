// 默认设置
(function ($) {

  // cumuli方法支持
  $.fn.extend({
    cumuli: function (method) {
      let text = '$.cumuli.' + (typeof method == 'function' ? method.call(this) : method);
      let callback = eval('(' + text + ')');

      if (typeof callback == 'function') {
        arguments[0] = this;
        let parent = eval('(' + text.replace(/\.[^\.]+$/, '') + ')'); // 解决this作用域问题
        return callback.apply(parent, arguments);
      } else {
        return callback;
      }
    },
    handle: function (handles) {
      if (typeof handles != 'object') handles = {};

      $(this).on('click', '.handle', function () {
        let handle = $(this).data('handle') || $(this).attr('handle');
        if (handle && typeof handles[handle] == 'function') {
          handles[handle](this);
        }
      });
    }
  });

  // ajax默认设置
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    statusCode: {
      401: () => {
        window.location.href = '/';
      }
    }
  });

  // 拦截ajax错误返回
  $(document).ajaxError((...xhr) => {
    if (xhr[2].type.toUpperCase() == 'GET') {
      return typeof xhr[2].success == 'function' && xhr[2].success(
          `<div class="easyui-panel error" data-options="fit:true,title:'访问出错了',iconCls:'fa fa-warning',border:false" style="padding: 0 20px">
            <h2>:(</h2>
            <p>错误码：　${xhr[1].status}</p>
            <p>错误信息：${xhr[1].statusText}</p>
            <p>请求地址：${xhr[2].url}</p>
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
        url: xhr[2].url,
        total: 0,
        rows: []
      });
    }
  });

  $.cumuli.theme.change(); // 切换上次选中主题，必须ready之前调用

  $(document).ready(() => {
    $.cumuli.theme.changeStatus();               // 选中当前主题
    $('body > .panel-loading:first').remove(); // 移除加载效果

    // 小屏设备自动隐藏左侧导航
    if ($('body').width() <= 768) {
      try {
        $('body').layout('collapse', 'west');
      } catch (e) {
      }
    }
  });

})(jQuery);
