// TODO 请不要随意调整顺序
window.$ = window.jQuery = require('jquery');
$.cumuli = {variable: {}, config: {}};

// 加载第三方包
require('jquery.cookie');
require('moment');

// 加载项目模块
require('./cumuli/easyui');
require('./cumuli/config');
require('./cumuli/event');
require('./cumuli/method');
require('./cumuli/setup');
