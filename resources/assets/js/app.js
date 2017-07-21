// TODO 请不要随意调整顺序
window.$ = window.jQuery = require('jquery');
$.cumuli = {};

require('EasyUI');
require('moment');
require('./extension');
require('./cumuli');

$(document).ready(function () {

  // ajax默认设置
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

  $('body > .panel-loading:first').remove();   // 移除加载效果

});
