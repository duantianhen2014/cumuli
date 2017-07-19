/* 页面跳转 */
$(document).on('click', '.cumuli-window-open', function () {
  window.open($(this).data('href'));
});
$(document).on('click', '.cumuli-window-location', function () {
  window.location.href = $(this).data('href');
});
$(document).on('click', '.cumuli-window-location-confirm', function () {
  var href = $(this).data('href');
  var msg = $(this).data('msg') || '确定要继续吗？';
  $.messager.confirm('系统提示', msg, function (res) {
    if (res) window.location.href = href;
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
