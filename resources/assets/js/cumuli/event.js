(function ($) {
  /* 主题切换 */
  $(document).on('click', '.cumuli-theme-change', function () {
    const theme = $(this).data('theme') || $(this).text();
    $.cumuli.theme.change(theme);
  });

  /* 菜单点击选中 */
  $(document).on('click', '.cumuli-menu-select', function () {
    $(this).menu('setIcon', {target: this, iconCls: 'fa fa-check-square-o'});
    $(this).siblings().each(function () {
      if ($(this).hasClass('menu-item')) {
        $(this).menu('setIcon', {target: this, iconCls: 'fa fa-square-o'});
      }
    });
  });

  /* 弹出层dialog */
  $(document).on('click', '.cumuli-dialog-form', function () {
    $.cumuli.dialog.form(this);
  });
  $(document).on('click', '.cumuli-dialog-page', function () {
    $.cumuli.dialog.page(this);
  });
  $(document).on('click', '.cumuli-dialog-content', function () {
    $.cumuli.dialog.content(this);
  });
  $(document).on('click', '.cumuli-dialog-element', function () {
    $.cumuli.dialog.element(this);
  });

  /* 页面加载 */
  $(document).on('click', '.cumuli-page-open', function () {
    $.cumuli.page.open(this);
  });
  // 收藏打开页面
  $(document).on('click', '.cumuli-page-collect', function () {
    $.cumuli.page.collect(this);
  });

  /* 页面跳转 */
  $(document).on('click', '.cumuli-window-open', function () {
    window.open($(this).data('href'));
  });
  $(document).on('click', '.cumuli-window-location', function () {
    window.location.href = $(this).data('href');
  });
  $(document).on('click', '.cumuli-window-location-confirm', function () {
    const href = $(this).data('href');
    const msg = $(this).data('msg') || '确定要继续吗？';
    $.messager.confirm('系统提示', msg, function (res) {
      if (res) window.location.href = href;
    });
  });

  /* 文件上传 */
  $(document).on('click upload', '.cumuli-upload-click', function () {
    let that = this;

    let condition = {}; // 解决某些地方无法获取焦点问题

    try {
      // datagrid
      let $datagrid = $(that).parents('.datagrid-view').find('.datagrid-f:first');
      if ($datagrid) {
        let row = $datagrid.datagrid('getSelected');
        let index = $datagrid.datagrid('getRowIndex', row);

        condition.datagrid = {
          datagrid: $datagrid,
          index: index,
          row: row,
        };
      }
    } catch (e) {
    }

    // 判断是否需要裁剪图片再上传
    let crop = $(this).data('crop') || $(this).attr('crop');
    let handle = crop ? $.cumuli.image.crop(this) : $.cumuli.file.upload(this);

    // 上传完成后的操作
    handle.then(
      data => {
        $(that).data('uploaded', data.result);

        // 支持回调函数
        let callback = $(that).data('callback') || $(this).attr('callback');
        if (callback) {
          callback = eval('(' + callback + ')');
          callback.call(that, data.result, condition);
        }
      },
      err => $.cumuli.message.show(err.message || '上传失败', 'error'),
    );
  });

  // 图片预览
  $(document).on('mouseenter', '.cumuli-gallery', function () {
    lightGallery(this, {
      selector: '.cumuli-gallery-item',
      cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
    });
  });

})(jQuery);
