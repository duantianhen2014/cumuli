(function ($) {

  // datagrid方法
  $.extend($.cumuli, {
    datagrid: {
      datagrid: null,
      items: ['title', 'icon', 'url', 'toolbar', 'tools', 'fit', 'border'],

      config: {
        border: false,
        fit: true,
        fitColumns: true,
        rownumbers: true,
        singleSelect: false,
        striped: true,
        multiSort: true,
        pagination: true,
        pageList: [20, 30, 50, 80, 100],
        pageSize: $.cookie('datagrid-pageSize') || 20,
        onChangePageSize: function (pageSize) {
          $.cookie('datagrid-pageSize', pageSize, {expires: 30});
        }
      },

      /* 解析选项中自定义属性 */
      option: function () {
        let option = $.extend({}, this.config); //读取默认配置文件
        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(this.datagrid).data(key);

          switch (key) {
            case 'title':
              if (!value) value = $(this.datagrid).find('caption:first').text();
              break;
            case 'icon':
              if (!value) value = $(this.datagrid).attr('iconCls');
              key = 'iconCls';
              break;
          }

          if (typeof value == 'undefined') continue;
          option[key] = value;
        }
        return option;
      },

      //初始化页面
      init: function (e, merge) {
        this.datagrid = e;
        let option = this.option();

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        //自动开启右键菜单功能
        if ($(e).data('menu')) {
          const that = this;
          option['onRowContextMenu'] = function (e, index, row) {
            if (index < 0) return false;
            let menu = $(that.datagrid).data('menu');
            if (!$(menu)) return false;

            e.preventDefault();
            $(that.datagrid).datagrid('unselectAll');
            $(that.datagrid).datagrid('selectRow', index);
            $(menu).menu('show', {left: e.pageX, top: e.pageY});
          };
        }

        option['init'] && delete(option['init']);
        option['option'] && delete(option['option']);
        option['action'] && delete(option['action']);
        option['handle'] && delete(option['handle']);

        $(this.datagrid).datagrid(option);

        this.event.toolbar(e, merge, this);
        this.event.menu(e, merge, this);
      },

      //监听工具栏和菜单
      event: {
        toolbar: function (e, obj, that) {
          const selecter = $(e).data('toolbar');
          if (!selecter) return false;

          $(selecter).on('click', '.toolbar-action', function () {
            let action = $(this).data('action');
            if (obj && obj['action'] && typeof obj['action'][action] == 'function') {
              let selected = $(e).datagrid('getSelected');   //当前选中的行
              let allSelected = $(e).datagrid('getSelections'); //全部选中的行

              obj['action'][action](this, selected, allSelected);
            }
          });

          $(selecter).on('click', '.toolbar-handle', function () {
            let handle = $(this).data('handle');
            if (obj && obj['handle'] && typeof obj['handle'][handle] == 'function') {
              let selected = $(e).datagrid('getSelected');   //当前选中的行
              let allSelected = $(e).datagrid('getSelections'); //全部选中的行

              obj['handle'][handle](this, selected, allSelected);
            }
          });

          $('.toolbar-search', selecter).on('click', function () {
            let option = {};
            let data = $(this).data('data') || '[]';
            let showGroup = $(this).data('group') === true ? 'true' : 'false';
            let close = $(this).data('close') || false; //搜索完毕后是否关闭弹出层
            let scrollbar = $(this).data('scrollbar') === true ? 18 : 0;
            option.title = $(this).text();
            option.iconCls = $(this).attr('iconCls') || $(this).data('icon');
            option.content = '<table class="easyui-propertygrid" data-options="data:' + data + ',showGroup:' + showGroup + ',border:false,fit:true,scrollbarSize:' + scrollbar + ',columns:[[{field:\'name\',title:\'字段名称\',width:100},{field:\'value\',title:\'筛选条件\',width:200}]]"></table>';

            option.width = $(this).data('width');
            option.height = $(this).data('height');

            option['buttons'] = [{
              text: '确定',
              iconCls: 'fa fa-check',
              handler: function () {
                let $propertygrid = $(that.dialog).find('.easyui-propertygrid:first');
                let rows = $propertygrid.propertygrid('getRows');
                let queryParams = $(e).datagrid('options').queryParams;
                queryParams['search'] = {};

                for (let i = 0; i < rows.length; i++) {
                  queryParams['search'][rows[i]['field']] = rows[i]['value'];
                }
                $(e).datagrid({pageNumber: 1});

                if (close === true) $(that.dialog).dialog('close');
              }
            }, {
              text: '取消',
              iconCls: 'fa fa-close',
              handler: function () {
                $(that.dialog).dialog('close');
              }
            }];
            $.cumuli.dialog.content(null, option);
          });
        },
        //右键菜单
        menu: function (e, obj, that) {
          const selecter = $(e).data('menu');
          if (!selecter) return false;

          $(selecter).on('click', '.menu-action', function () {
            let action = $(this).data('action');
            if (obj && obj['action'] && typeof obj['action'][action] == 'function') {
              let selected = $(e).datagrid('getSelected');   //当前选中的行
              let allSelected = $(e).datagrid('getSelections'); //全部选中的行

              obj['action'][action](this, selected, allSelected);
            }
          });

          $(selecter).on('click', '.menu-handle', function () {
            let handle = $(this).data('handle');
            if (obj && obj['handle'] && typeof obj['handle'][handle] == 'function') {
              let selected = $(e).datagrid('getSelected');   //当前选中的行
              let allSelected = $(e).datagrid('getSelections'); //全部选中的行

              obj['handle'][handle](this, selected, allSelected);
            }
          });
        }
      }
    }
  });

  // dialog方法
  $.extend($.cumuli, {
    dialog: {
      dialog: '.cumuli-dialog:first',

      items: ['submit', 'constrain', 'href', 'content', 'title', 'width', 'height', 'icon', 'modal', 'maximized', 'collapsible', 'minimizable', 'maximizable', 'closable', 'resizable', 'draggable', 'method', 'iframe'],

      config: {
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
      },

      /* 解析选项中自定义属性 */
      option: function (e) {
        let option = $.extend({}, this.config); // 读取默认配置文件
        if (!e) return option;

        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(e).data(key);

          switch (key) {
            case 'title':
              if (!value) value = $(e).text();
              break;
            case 'content':
              if (!value) value = $(e).html();
              break;
            case 'icon':
              if (!value) value = $(e).attr('iconCls');
              key = 'iconCls';
              break;
          }

          if (typeof value == 'undefined') continue;
          option[key] = value;
        }

        option['submit'] = option['submit'] || option['href'];
        return option;
      },

      /* 表单 支持提交功能 */
      form: function (e, merge, success, error) {
        const that = this;
        let option = that.option(e);

        option['buttons'] = [{
          text: '确定',
          iconCls: 'fa fa-check',
          handler: function () {
            $(that.dialog).find('form:first').form('submit', {
              onSubmit: function () {
                let isValid = $(this).form('validate');
                if (!isValid) return false;

                $.post(option['submit'], $(this).serialize(), function (data) {
                  if (data.status == 'error') {
                    typeof error == 'function' && error(data);
                  } else {
                    $(that.dialog).dialog('close');
                    typeof success == 'function' && success(data);
                  }
                });

                return false;
              }
            });
          }
        }, {
          text: '取消',
          iconCls: 'fa fa-close',
          handler: function () {
            $(that.dialog).dialog('close');
          }
        }];
        //回车默认点击第一个按钮
        option['onLoad'] = function () {
          $(that.dialog).find('form:first').on('keyup', function (event) {
            if (event.keyCode == 13) option['buttons'][0].handler();
          });
        };

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        $(that.dialog).dialog(option).dialog('center');
      },

      /* 显示页面 只能关闭 */
      page: function (e, merge) {
        const that = this;
        let option = that.option(e);

        option['buttons'] = [{
          text: '关闭',
          iconCls: 'fa fa-close',
          handler: function () {
            $(that.dialog).dialog('close');
          }
        }];

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        if (option.href && option.iframe) {
          let html = [];
          html.push('<div class="panel-loading" style="position: absolute;width:100%;height:100%;">Loading...</div>');
          html.push('<iframe width="100%" height="100%" allowtransparency="true" src="' + option.href + '"');
          html.push(' style="background-color:transparent;border:none;margin-bottom:-5px;"');
          html.push(' onload="this.previousSibling.remove()"');
          html.push('></iframe>');
          option.content = html.join('');
          option.href = null;
        }
        console.log(option);

        $(that.dialog).dialog(option).dialog('center');
      },

      /* 显示内容(不支持href)，只能关闭 */
      content: function (e, merge) {
        var that = this;
        var option = that.option(e);

        option['buttons'] = [{
          text: '关闭',
          iconCls: 'fa fa-close',
          handler: function () {
            $(that.dialog).dialog('close');
          }
        }];

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        option['href'] = null;
        $(that.dialog).dialog(option).dialog('center');
      },

      /* 显示其他内容区域 */
      element: function (e, merge) {
        var dialog = e;
        var option = this.option(dialog);

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        option['href'] = null;
        $(dialog).dialog(option).dialog('center');
      }
    }
  });

  // target方法
  $.extend($.cumuli, {
    target: {
      center: function (module) {
        $tabs = $('body').layout('panel', 'center').eq(0).find('.easyui-tabs:first');
        if (!$tabs) return;

        // 判断如果存在则不添加新标签
        let exists = null;
        $tabs.tabs('tabs').forEach(function ($tab, index) {
          let panel = $tab.panel('options');

          // 必须同时满足3个条件才能认为存在
          if (panel.href == module.url && panel.title == module.text && panel.iconCls == module.iconCls) {
            exists = index;
            return false;
          }
        });
        if (typeof exists == 'number') {
          return $tabs.tabs('select', exists);
        }

        // 添加新标签
        $tabs.tabs('add', {
          title: module.text,
          href: module.url,
          iconCls: module.iconCls,
          closable: true,
          cache: true,
        });

      }
    }
  });

  // message方法
  $.extend($.cumuli, {
    message: {
      config: {
        title: '提示信息',
        timeout: 3000,
        showType: 'slide'
      },
      show: function (msg, icon, title, timeout, showType) {
        let option = $.extend({}, this.config);
        let text = []
        text.push('<div class="messager-icon messager-');
        text.push(icon || 'info');
        text.push('"></div>');
        text.push('<div>' + msg + '</div>');
        $.messager.show({
          title: title || option.title,
          msg: text.join(''),
          timeout: timeout || option.timeout,
          showType: showType || option.showType
        });
      }
    }
  });

  // propertygrid方法
  $.extend($.cumuli, {
    propertygrid: {
      propertygrid: null,
      items: ['title', 'icon', 'url', 'toolbar', 'tools', 'fit', 'border'],

      config: {
        border: false,
        fit: true,
        fitColumns: true,
        showHeader: true,
        rownumbers: false,
        singleSelect: false,
        striped: true,
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
        onChangePageSize: function (pageSize) {
          $.cookie('propertygrid-pageSize', pageSize, {expires: 30});
        }
      },

      /* 解析选项中自定义属性 */
      option: function () {
        let option = $.extend({}, this.config); //读取默认配置文件
        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(this.propertygrid).data(key);

          switch (key) {
            case 'title':
              if (!value) value = $(this.propertygrid).find('caption:first').text();
              break;
            case 'icon':
              if (!value) value = $(this.propertygrid).attr('iconCls');
              key = 'iconCls';
              break;
          }

          if (typeof value == 'undefined') continue;
          option[key] = value;
        }
        return option;
      },

      //初始化页面
      init: function (e, merge) {
        this.propertygrid = e;
        let option = this.option();

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        //自动开启右键菜单功能
        if ($(e).data('menu')) {
          const that = this;
          option['onRowContextMenu'] = function (e, index, row) {
            if (index < 0) return false;
            let menu = $(that.propertygrid).data('menu');
            if (!$(menu)) return false;

            e.preventDefault();
            $(that.propertygrid).propertygrid('unselectAll');
            $(that.propertygrid).propertygrid('selectRow', index);
            $(menu).menu('show', {left: e.pageX, top: e.pageY});
          };
        }

        option['init'] && delete(option['init']);
        option['option'] && delete(option['option']);
        option['action'] && delete(option['action']);
        option['handle'] && delete(option['handle']);

        $(this.propertygrid).propertygrid(option);

        this.event.toolbar(e, merge);
        this.event.menu(e, merge);
      },

      //监听工具栏
      event: {
        toolbar: function (e, obj) {
          const selecter = $(e).data('toolbar');
          if (!selecter) return false;

          $(selecter).on('click', '.toolbar-action', function () {
            let action = $(this).data('action');
            if (obj && obj['action'] && typeof obj['action'][action] == 'function') {
              let selected = $(e).propertygrid('getSelected');   //当前选中的行
              let allSelected = $(e).propertygrid('getSelections'); //全部选中的行

              obj['action'][action](this, selected, allSelected);
            }
          });

          $(selecter).on('click', '.toolbar-handle', function () {
            let handle = $(this).data('handle');
            if (obj && obj['handle'] && typeof obj['handle'][handle] == 'function') {
              let selected = $(e).propertygrid('getSelected');   //当前选中的行
              let allSelected = $(e).propertygrid('getSelections'); //全部选中的行

              obj['handle'][handle](this, selected, allSelected);
            }
          });
        },

        menu: function (e, obj) {
          const selecter = $(e).data('menu');
          if (!selecter) return false;

          $(selecter).on('click', '.menu-action', function () {
            let action = $(this).data('action');
            if (obj && obj['action'] && typeof obj['action'][action] == 'function') {
              let selected = $(e).propertygrid('getSelected');   //当前选中的行
              let allSelected = $(e).propertygrid('getSelections'); //全部选中的行

              obj['action'][action](this, selected, allSelected);
            }
          });

          $(selecter).on('click', '.menu-handle', function () {
            let handle = $(this).data('handle');
            if (obj && obj['handle'] && typeof obj['handle'][handle] == 'function') {
              let selected = $(e).propertygrid('getSelected');   //当前选中的行
              let allSelected = $(e).propertygrid('getSelections'); //全部选中的行

              obj['handle'][handle](this, selected, allSelected);
            }
          });
        }
      }
    }
  });

  // theme方法
  $.extend($.cumuli, {
    theme: {
      // 更换主题
      change: function (theme) {
        if (!theme) theme = this.current();
        if (!$("link[theme='" + theme + "']")) return;

        $("link[theme='" + theme + "']")
          .prop('disabled', false)
          .siblings()
          .each(function () {
            if ($(this).attr('theme')) {
              $(this).prop('disabled', true);
            }
          });

        // 记录主题到cookie
        $.cookie('theme', theme, {expires: 30});
        this.changeStatus();
      },

      // 获取当前主题
      current: function () {
        return $.cookie('theme') || 'metro';
      },

      // 选中效果
      changeStatus: function () {
        const theme = this.current();
        $('.cumuli-theme-change.cumuli-menu-select').each(function () {
          let item = $(this).data('theme') || $(this).text();
          if ($(this).hasClass('menu-item')) {
            if (item == theme) {
              $(this).menu('setIcon', {target: this, iconCls: 'fa fa-check-square-o'});
            } else {
              $(this).menu('setIcon', {target: this, iconCls: 'fa fa-square-o'});
            }
          }
        });
      }
    }
  });

  // treegrid方法
  $.extend($.cumuli, {
    treegrid: {
      treegrid: null,
      items: ['title', 'icon', 'url', 'toolbar', 'tools', 'id', 'name', 'lines', 'animate', 'fit', 'border'],

      config: {
        border: false,
        fit: true,
        fitColumns: true,
        rownumbers: true,
        singleSelect: false,
        striped: true,
        idField: 'id',
        treeField: 'name',
        animate: true,
        lines: true,
        pagination: true,
        pageList: [10, 20, 30, 40, 50],
        pageSize: $.cookie('treegrid-pageSize') || 10,
        onChangePageSize: function (pageSize) {
          $.cookie('treegrid-pageSize', pageSize, {expires: 30});
        }
      },

      /* 解析选项中自定义属性 */
      option: function () {
        let option = $.extend({}, this.config); //读取默认配置文件
        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(this.treegrid).data(key);

          switch (key) {
            case 'title':
              if (!value) value = $(this.treegrid).find('caption:first').text();
              break;
            case 'icon':
              if (!value) value = $(this.treegrid).attr('iconCls');
              key = 'iconCls';
              break;
            case 'id':
              if (!value) value = $(this.treegrid).attr('idField');
              key = 'idField';
              break;
            case 'name':
              if (!value) value = $(this.treegrid).attr('treeField');
              key = 'treeField';
              break;
          }

          if (typeof value == 'undefined') continue;
          option[key] = value;
        }
        return option;
      },

      //初始化页面
      init: function (e, merge) {
        this.treegrid = e;
        let option = this.option();

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        //自动开启右键菜单功能
        if ($(e).data('menu')) {
          const that = this;
          option['onContextMenu'] = function (e, row) {
            if (!row) return false;
            let menu = $(that.treegrid).data('menu');
            if (!$(menu)) return false;

            e.preventDefault();
            $(that.treegrid).treegrid('unselectAll');
            let id = $(that.treegrid).treegrid('options').idField || 'id';
            $(that.treegrid).treegrid('select', row[id]);
            $(menu).menu('show', {left: e.pageX, top: e.pageY});
          };
        }

        option['init'] && delete(option['init']);
        option['option'] && delete(option['option']);
        option['action'] && delete(option['action']);
        option['handle'] && delete(option['handle']);

        $(this.treegrid).treegrid(option);

        this.event.toolbar(e, merge, that);
        this.event.menu(e, merge, that);
      },

      //监听工具栏
      event: {
        toolbar: function (e, obj) {
          const selecter = $(e).data('toolbar');
          if (!selecter) return false;

          $(selecter).on('click', '.toolbar-action', function () {
            let action = $(this).data('action');
            if (obj && obj['action'] && typeof obj['action'][action] == 'function') {
              let selected = $(e).treegrid('getSelected');   //当前选中的行
              let allSelected = $(e).treegrid('getSelections'); //全部选中的行

              obj['action'][action](this, selected, allSelected);
            }
          });

          $(selecter).on('click', '.toolbar-handle', function () {
            let handle = $(this).data('handle');
            if (obj && obj['handle'] && typeof obj['handle'][handle] == 'function') {
              let selected = $(e).treegrid('getSelected');   //当前选中的行
              let allSelected = $(e).treegrid('getSelections'); //全部选中的行

              obj['handle'][handle](this, selected, allSelected);
            }
          });
        },
        menu: function (e, obj) {
          let selecter = $(e).data('menu');
          if (!selecter) return false;

          $(selecter).on('click', '.menu-action', function () {
            let action = $(this).data('action');
            if (obj && obj['action'] && typeof obj['action'][action] == 'function') {
              let selected = $(e).treegrid('getSelected');   //当前选中的行
              let allSelected = $(e).treegrid('getSelections'); //全部选中的行

              obj['action'][action](this, selected, allSelected);
            }
          });

          $(selecter).on('click', '.menu-handle', function () {
            let handle = $(this).data('handle');
            if (obj && obj['handle'] && typeof obj['handle'][handle] == 'function') {
              let selected = $(e).treegrid('getSelected');   //当前选中的行
              let allSelected = $(e).treegrid('getSelections'); //全部选中的行

              obj['handle'][handle](this, selected, allSelected);
            }
          });
        }
      }
    }
  });

})(jQuery);
