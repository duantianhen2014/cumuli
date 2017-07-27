(function ($) {

  // datagrid默认配置
  $.extend($.cumuli.config, {
    datagrid: {
      border: false,
      fit: true,
      fitColumns: true,
      rownumbers: true,
      singleSelect: true,
      striped: true,
      multiSort: true,
      pagination: true,
      pageList: [20, 30, 50, 80, 100],
      pageSize: $.cookie('datagrid-pageSize') || 20,
      onBeforeLoad: function (param) {
        $.cookie('datagrid-pageSize', param.rows, {expires: 30});
      }
    }
  });

  // dialog默认配置
  $.extend($.cumuli.config, {
    dialog: {
      closed: false,
      constrain: true,
      iconCls: null,
      buttons: null,
      maximized: false,
      collapsible: false,
      minimizable: false,
      maximizable: false,
      closable: true,
      resizable: false,
      draggable: true,
      openAnimation: 'fade',
      closeAnimation: 'fade',
      modal: true,
      content: null,
      href: null,
      method: 'get',
      iframe: false,
    }
  });

  // message默认配置
  $.extend($.cumuli.config, {
    message: {
      title: '提示信息',
      timeout: 3000,
      showType: 'slide'
    }
  });

  // page默认配置
  $.extend($.cumuli.config, {
    page: {
      iconCls: null,
      cache: true,
      closable: true,
    }
  });

  // propertygrid默认配置
  $.extend($.cumuli.config, {
    propertygrid: {
      border: false,
      fit: true,
      fitColumns: true,
      showHeader: true,
      rownumbers: false,
      singleSelect: true,
      striped: false,
      showGroup: true,
      //scrollbarSize : 0,
      columns: [[
        {field: 'name', title: '名称', width: 80, sortable: true},
        {
          field: 'value', title: '参数', width: 200, sortable: false,
          formatter: function (value, arr) {
            let editor = '';
            if (typeof arr.editor == 'object') {
              editor = arr.editor.type;
            } else {
              editor = arr.editor;
            }
            switch (editor) {
              case 'color':
                var html = [];
                html.push('<div>');
                html.push('<div style="float:right;width:18px;height:18px;background:' + value + '">&nbsp;</div>');
                html.push(value);
                html.push('<div style="clear:both"></div>');
                html.push('</div>');
                return html.join('');
                break;
              case 'password':
                return value.replace(/./g, '●');
                break;

              default:
                return value;
            }
          }
        }
      ]],
      pagination: false,
      pageList: [20, 30, 50, 80, 100],
      pageSize: $.cookie('propertygrid-pageSize') || 20,
      onBeforeLoad: function (param) {
        $.cookie('propertygrid-pageSize', param.rows, {expires: 30});
      }
    }
  });

  // treegrid默认配置
  $.extend($.cumuli.config, {
    treegrid: {
      border: false,
      fit: true,
      fitColumns: true,
      rownumbers: true,
      singleSelect: true,
      striped: true,
      idField: 'id',
      treeField: 'name',
      animate: true,
      lines: true,
      pagination: true,
      pageList: [10, 20, 30, 40, 50],
      pageSize: $.cookie('treegrid-pageSize') || 10,
      onBeforeLoad: function (param) {
        $.cookie('treegrid-pageSize', param.rows, {expires: 30});
      }
    }
  });

})(jQuery);
