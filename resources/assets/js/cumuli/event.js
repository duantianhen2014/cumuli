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

})(jQuery);
