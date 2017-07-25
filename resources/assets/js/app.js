// TODO 请不要随意调整顺序
window.$ = window.jQuery = require('jquery');
$.cumuli = {variable: {}};

// 加载第三方包
require('jquery.cookie');
require('moment');
require('EasyUI');
require('./jquery.easyui.extend');
require('../extension/datagrid-filter/datagrid-filter');
require('../extension/jquery-easyui-color/jquery.color');
$.extend($.cumuli.variable, {
  datagrid: {
    bufferview: require('../extension/jquery-easyui-datagridview/datagrid-bufferview'),
    defaultview: require('../extension/jquery-easyui-datagridview/datagrid-defaultview'),
    detailview: require('../extension/jquery-easyui-datagridview/datagrid-detailview'),
    groupview: require('../extension/jquery-easyui-datagridview/datagrid-groupview'),
    scrollview: require('../extension/jquery-easyui-datagridview/datagrid-scrollview'),
  }
});
require('../extension/jquery-easyui-etree/jquery.etree');
require('../extension/jquery-easyui-etree/jquery.etree.lang');
require('../extension/jquery-easyui-pivotgrid/jquery.pivotgrid');
require('../extension/jquery-easyui-portal/jquery.portal');
require('../extension/jquery-easyui-texteditor/jquery.texteditor');

// 加载项目模块
require('./cumuli/event');
require('./cumuli/method');
require('./cumuli/setup');
