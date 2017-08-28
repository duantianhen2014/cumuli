(function ($) {

  // datagrid方法
  $.extend($.cumuli, {
    datagrid: {
      datagrid: null,
      items: ['title', 'icon', 'url', 'toolbar', 'menu', 'tools', 'fit', 'border'],

      /* 解析选项中自定义属性 */
      option: function () {
        let option = $.extend({}, $.cumuli.config.datagrid); //读取默认配置文件
        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(this.datagrid).data(key) || $(this.datagrid).attr(key);

          switch (key) {
            case 'title':
              if (!value) value = $('caption:first', this.datagrid).text();
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
        if (option.menu) {
          const that = this;
          option['onRowContextMenu'] = function (e, index, row) {
            if (index < 0) return false;

            e.preventDefault();
            $(that.datagrid).datagrid('unselectAll');
            $(that.datagrid).datagrid('selectRow', index);
            $(option.menu).menu('show', {left: e.pageX, top: e.pageY});
          };
        }

        $(this.datagrid).datagrid(option);

        return this;
      },

      // 筛选
      filter: function (filters) {
        $(this.datagrid).datagrid('enableFilter', filters || []);

        return this;
      },

      // 自定义操作
      handle: function (handles) {
        let $datagrid = $(this.datagrid);
        let option = $datagrid.datagrid('options');
        if (typeof handles != 'object') handles = {};

        // 监听工具栏
        if (option.toolbar) {
          $(option.toolbar).on('click', '.handle', function () {
            let handle = $(this).data('handle') || $(this).attr('handle');
            if (handle && typeof handles[handle] == 'function') {
              let selected = $datagrid.datagrid('getSelected');   //当前选中的行
              let allSelected = $datagrid.datagrid('getSelections'); //全部选中的行

              handles[handle](this, selected, allSelected, option);
            }
          });
        }

        // 监听右键菜单
        if (option.menu) {
          $(option.menu).on('click', '.handle', function () {
            let handle = $(this).data('handle') || $(this).attr('handle');
            if (handle && typeof handles[handle] == 'function') {
              let selected = $datagrid.datagrid('getSelected');   //当前选中的行
              let allSelected = $datagrid.datagrid('getSelections'); //全部选中的行

              handles[handle](this, selected, allSelected, option);
            }
          });
        }

        return this;
      },
    }
  });

  // dialog方法
  $.extend($.cumuli, {
    dialog: {
      dialog: '#cumuli-dialog-common',

      items: ['dialog', 'submit', 'constrain', 'href', 'content', 'title', 'width', 'height', 'icon', 'modal', 'maximized', 'collapsible', 'minimizable', 'maximizable', 'closable', 'resizable', 'draggable', 'method', 'iframe'],

      close: function () {
        $(this.dialog).dialog('close');
      },

      /* 解析选项中自定义属性 */
      option: function (e) {
        let option = $.extend({}, $.cumuli.config.dialog); // 读取默认配置文件
        if (!e) return option;

        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(e).data(key) || $(e).attr(key);

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
        return option;
      },

      /* 表单 支持提交功能 */
      form: function (e, merge, success, error) {
        const that = this;

        return new Promise(function (resolve, reject) {
          let option = that.option(e);

          option['buttons'] = [{
            text: '确定',
            iconCls: 'fa fa-check',
            handler: function () {
              $('form:first', that.dialog).form('submit', {
                onSubmit: function () {
                  let isValid = $(this).form('validate');
                  if (!isValid) return false;

                  $.cumuli.request.post(option['submit'], this, function (data) {
                    if (data.status == 'error') {
                      $.cumuli.message.show(data.message || '操作失败', 'error');
                      typeof error == 'function' && error(data);
                      reject(data);
                    } else {
                      that.close();
                      typeof success == 'function' && success(data);
                      resolve(data);
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
              that.close();
            }
          }];

          //合并参数
          if (typeof merge == 'object') $.extend(option, merge);
          option.submit = option.submit || option.href;

          $(option.dialog || that.dialog).dialog(option).dialog('center');
        });
      },

      /* 显示页面 只能关闭 */
      page: function (e, merge) {
        const that = this;
        let option = that.option(e);

        option['buttons'] = [{
          text: '关闭',
          iconCls: 'fa fa-close',
          handler: function () {
            that.close();
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

        $(option.dialog || that.dialog).dialog(option).dialog('center');

        return option.dialog || that.dialog;
      },

      /* 显示内容(不支持href)，只能关闭 */
      content: function (e, merge) {
        let that = this;
        let option = that.option(e);

        option['buttons'] = [{
          text: '关闭',
          iconCls: 'fa fa-close',
          handler: function () {
            that.close();
          }
        }];

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        option['href'] = null;
        $(option.dialog || that.dialog).dialog(option).dialog('center');

        return option.dialog || that.dialog;
      },

      /* 显示其他内容区域 */
      element: function (e, merge) {
        let dialog = e;
        let option = this.option(dialog);

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        option['href'] = null;
        $(option.dialog || dialog).dialog(option).dialog('center');

        return option.dialog || dialog;
      }
    }
  });

  // file方法
  $.extend($.cumuli, {
    file: {
      // 读取单个file
      read: function (file) {
        return new Promise(function (resolve, reject) {
          let reader = new FileReader();
          reader.onloadstart = function (e) {
            $.messager.progress({title: '读取文件...', text: '0%', interval: false});
          };
          // 进度
          reader.onprogress = function (e) {
            let progress = 100 * e.loaded / e.total;
            $('.messager-p-bar:first', '.messager-window').progressbar({
              text: progress + '%',
              value: progress
            });
          };
          // 读取中断
          reader.onabort = function (e) {
            $('.messager-p-bar:first', '.messager-window').progressbar({text: '读取中断',});
            $.messager.progress('close');
            reject(e);
          };
          // 读取异常
          reader.onerror = function (e) {
            $('.messager-p-bar:first', '.messager-window').progressbar({text: '读取异常',});
            $.messager.progress('close');
            reject(e);
          };
          // 读取成功
          reader.onload = function (e) {
            $.messager.progress('close');
            resolve(e);
          };
          reader.readAsDataURL(file);
        });
      },

      // 选择本地文件，返回file和FormData
      input: function (merge) {
        let option = {
          id: 'file-input-' + new Date().getTime(),
          upload: '',
          name: 'upload',
          multiple: false,
          accept: '*/*'
        };

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        // 重置操作
        $('#' + option.id) && $('#' + option.id).remove();
        $('body').append('<div id="' + option.id + '" style="display: none"></div>');

        // 多文件上传时name必须为数组
        if (option.multiple && !option.name.endsWith('[]')) {
          option.name += '[]';
        }

        // 创建表单
        let html = [];
        html.push('<form>');
        html.push('<input type="file" name="' + option.name + '"');
        option.accept && html.push(' accept="' + option.accept + '"');
        option.multiple && html.push(' multiple');
        html.push(' />');
        html.push('<input type="hidden" name="name" value="' + option.name.replace(/\[\]$/, '') + '" />');
        html.push('</form>');
        $('#' + option.id).append(html.join(''));

        return new Promise(function (resolve, reject) {
          // 上传操作
          $('input[type="file"]', '#' + option.id)
            .on('change', function (event) {
              resolve({
                files: event.target.files,
                formData: new FormData(document.querySelector('#' + option.id + ' > form'))
              });

              $('#' + option.id).remove();
            })
            .trigger('click');
        });
      },

      // 上传文件
      upload: function (e, merge) {
        let items = ['href', 'upload', 'multiple', 'accept', 'name'];
        let option = {
          upload: '',
          name: 'upload',
          multiple: false,
          accept: '*/*'
        };

        for (let i = 0; i < items.length; i++) {
          let key = items[i];
          let value = $(e).data(key) || $(e).attr(key);

          if (typeof value == 'undefined') continue;
          option[key] = value;
        }

        if (!option.upload) option.upload = option.href || '';

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        return new Promise(function (resolve, reject) {
          // 验证
          if (!option.upload) {
            return reject({message: '缺少上传参数'});
          }

          $.cumuli.file.input(option)
            .then(input => $.cumuli.request.post(option.upload, input.formData), reject)
            .then(resolve, reject);
        });
      }
    }
  });

  // image方法
  $.extend($.cumuli, {
    image: {
      items: ['accept', 'name', 'width', 'height', 'crop', 'upload'],
      option: function (e, merge) {
        let option = {
          name: 'upload',
          accept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
          multiple: false,
          width: 240,
          height: 180,
          crop: 'canvas',
          upload: '',
        };

        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(e).data(key) || $(e).attr(key);

          if (typeof value == 'undefined') continue;
          option[key] = value;
        }

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);
        return option;
      },

      // 选择图片并裁剪
      crop: function (e, merge) {
        let option = this.option(e, merge);
        let formData = null;

        return new Promise(function (resolve, reject) {
          // 验证
          if (!option.upload) {
            return reject({message: '缺少上传参数'});
          }

          $.cumuli.file.input(option)
            .then(input => {
              formData = input.formData;
              return $.cumuli.file.read(input.files[0]);
            }, reject)
            .then(function (event) {
              if (!event.target.result) return false;

              let $img = null;
              let scale = [1, 1];
              let dialog = $.cumuli.dialog.page(null, {
                dialog: '#cumuli-dialog-second',
                iconCls: 'fa fa-crop',
                title: '图片裁剪',
                content: '<div style="width:100%;height:100%;margin:0;padding:0;overflow:hidden"><img /></div>',
                draggable: false,
                maximizable: false,
                maximized: true,
                resizable: false,
                closable: false,
                collapsible: false,
                tools: [
                  {
                    iconCls: 'fa fa-clone',
                    handler: function () {
                      if (!$img) return false;
                      $img.cropper('zoomTo', 1);
                    }
                  },
                  {
                    iconCls: 'fa fa-search-plus',
                    handler: function () {
                      if (!$img) return false;
                      $img.cropper('zoom', 0.1);
                    }
                  },
                  {
                    iconCls: 'fa fa-search-minus',
                    handler: function () {
                      if (!$img) return false;
                      $img.cropper('zoom', -0.1);
                    }
                  },
                  {
                    iconCls: 'fa fa-arrow-left',
                    handler: function () {
                      if (!$img) return false;
                      $img.cropper('move', -10, 0);
                    }
                  },
                  {
                    iconCls: 'fa fa-arrow-right',
                    handler: function () {
                      if (!$img) return false;
                      $img.cropper('move', 10, 0);
                    }
                  },
                  {
                    iconCls: 'fa fa-arrow-up',
                    handler: function () {
                      if (!$img) return false;
                      $img.cropper('move', 0, -10);
                    }
                  },
                  {
                    iconCls: 'fa fa-arrow-down',
                    handler: function () {
                      if (!$img) return false;
                      $img.cropper('move', 0, 10);
                    }
                  },
                  {
                    iconCls: 'fa fa-rotate-left',
                    handler: function () {
                      if (!$img) return false;
                      $img.cropper('rotate', -45);
                    }
                  },
                  {
                    iconCls: 'fa fa-rotate-right',
                    handler: function () {
                      if (!$img) return false;
                      $img.cropper('rotate', 45);
                    }
                  },
                  {
                    iconCls: 'fa fa-arrows-h',
                    handler: function () {
                      if (!$img) return false;
                      scale[0] *= -1;
                      $img.cropper('scaleX', scale[0]);
                    }
                  },
                  {
                    iconCls: 'fa fa-arrows-v',
                    handler: function () {
                      if (!$img) return false;
                      scale[1] *= -1;
                      $img.cropper('scaleY', scale[1]);
                    }
                  },
                  {
                    iconCls: 'fa fa-refresh',
                    handler: function () {
                      if (!$img) return false;
                      scale = [1, 1];
                      $img.cropper('reset');
                    }
                  },
                ],
                buttons: [
                  {
                    text: '确定',
                    iconCls: 'fa fa-check',
                    handler: function () {
                      if (!$img) {
                        reject();
                        return false;
                      }

                      // 追加参数
                      formData.append('type', option.crop);
                      formData.append('crop', JSON.stringify({
                        data: $img.cropper('getData'),
                        width: option.width,
                        height: option.height,
                      }));

                      // 如果使用HTML5处理，则需要替换原始formData
                      if (option.crop == 'canvas') {
                        $img
                          .cropper('getCroppedCanvas', {
                            width: option.width,
                            height: option.height,
                          })
                          .toBlob(blob => {
                            formData.set(formData.get('name'), blob);

                            $.cumuli.request.post(option.upload, formData).then(resolve, reject);
                          });
                      } else {
                        $.cumuli.request.post(option.upload, formData).then(resolve, reject);
                      }
                      $(dialog).dialog('close');
                    }
                  },
                  {
                    text: '关闭',
                    iconCls: 'fa fa-close',
                    handler: function () {
                      $(dialog).dialog('close');
                    }
                  }
                ],
                onResize: function () {
                  if ($img) {
                    $img.cropper('destroy').cropper({aspectRatio: option.width / option.height});
                  }
                },
                onOpen: function () {
                  // 稍微延迟加载，避免不能全屏问题
                  let that = this;
                  setTimeout(function () {
                    $img = $('img:first', that);

                    $img.prop('src', event.target.result).cropper({aspectRatio: option.width / option.height});
                  }, 150);
                }
              });
            });
        });
      }
    }
  });

  // message方法
  $.extend($.cumuli, {
    message: {
      show: function (msg, icon, title, timeout, showType) {
        let option = $.extend({}, $.cumuli.config.message);
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

  // page方法
  $.extend($.cumuli, {
    page: {
      items: ['href', 'title', 'icon', 'closable', 'cache', 'iframe'],

      /* 解析选项中自定义属性 */
      option: function (e) {
        let option = $.extend({}, $.cumuli.config.page); // 读取默认配置文件
        if (!e) return option;

        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(e).data(key) || $(e).attr(key);

          switch (key) {
            case 'title':
              if (!value) value = $(e).text();
              break;
            case 'icon':
              if (!value) value = $(e).attr('iconCls');
              key = 'iconCls';
              break;
          }

          if (typeof value == 'undefined') continue;
          option[key] = value;
        }
        return option;
      },

      open: function (e, merge) {
        $tabs = $('body').layout('panel', 'center').find('.easyui-tabs:first');
        if (!$tabs) return;

        // 小屏设备自动隐藏左侧导航
        if ($('body').width() <= 768) {
          try {
            $('body').layout('collapse', 'west');
          } catch (e) {
          }
        }

        let option = this.option(e);

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        // 判断如果存在则不添加新标签
        let exists = null;
        $tabs.tabs('tabs').forEach(function ($tab, index) {
          let panel = $tab.panel('options');

          // 必须同时满足多个条件才能认为存在
          if (panel.iframe && panel.title == option.title && panel.iconCls == option.iconCls) {
            exists = index;
            return false;
          } else if (!panel.iframe && panel.href == option.href && panel.title == option.title && panel.iconCls == option.iconCls) {
            exists = index;
            return false;
          }
        });

        // 选中已存在标签
        if (typeof exists == 'number') {
          return $tabs.tabs('select', exists);
        }

        // 添加新标签
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
        $tabs.tabs('add', option);
      },

      // 收藏当前页面
      collect: function (e, merge) {
        let option = {
          handle: $(e).data('handle') || $(e).attr('handle')
        };

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        return new Promise(function (resolve, reject) {
          $tabs = $('body').layout('panel', 'center').find('.easyui-tabs:first');
          if (!$tabs) return reject({message: '获取失败，请重试！'});

          let options = $tabs.tabs('getSelected').panel('options');
          if (typeof option.handle == 'string') {
            option.handle = eval('(' + option.handle + ')');
            option.handle.call(e, options);
          } else if (typeof option.handle == 'function') {
            option.handle(options);
          }

          return options ? resolve(options) : reject({message: '获取失败，请重试！'});
        });
      },
    }
  });

  // panel方法
  $.extend($.cumuli, {
    panel: {
      panel: null,
      items: ['title', 'icon', 'url', 'tools', 'fit', 'border'],
      option: function (e, merge) {
        let option = {};
        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(e).data(key) || $(e).attr(key);

          switch (key) {
            case 'title':
              if (!value) value = $('caption:first', e).text();
              break;
            case 'icon':
              if (!value) value = $(e).attr('iconCls');
              key = 'iconCls';
              break;
          }

          if (typeof value == 'undefined') continue;
          option[key] = value;
        }

        //合并参数
        if (typeof merge == 'object') $.extend(option, merge);

        return option;
      },
      init: function (e, merge) {
        this.panel = e;
        $(e).panel(this.option(e, merge));

        return this;
      },
      handle: function (handles) {
        if (typeof handles != 'object') handles = {};

        $(this.panel).on('click', '.handle', function () {
          let handle = $(this).data('handle') || $(this).attr('handle');
          if (handle && typeof handles[handle] == 'function') {
            handles[handle](this);
          }
        });
      }
    }
  });

  // propertygrid方法
  $.extend($.cumuli, {
    propertygrid: {
      propertygrid: null,
      items: ['title', 'icon', 'url', 'toolbar', 'tools', 'fit', 'border'],

      /* 解析选项中自定义属性 */
      option: function () {
        let option = $.extend({}, $.cumuli.config.propertygrid); //读取默认配置文件
        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(this.propertygrid).data(key) || $(this.propertygrid).attr(key);

          switch (key) {
            case 'title':
              if (!value) value = $('caption:first', this.propertygrid).text();
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
        if (option.menu) {
          const that = this;
          option['onRowContextMenu'] = function (e, index, row) {
            if (index < 0) return false;

            e.preventDefault();
            $(that.propertygrid).propertygrid('unselectAll');
            $(that.propertygrid).propertygrid('selectRow', index);
            $(option.menu).menu('show', {left: e.pageX, top: e.pageY});
          };
        }

        $(this.propertygrid).propertygrid(option);

        return this;
      },

      // 筛选
      filter: function (filters) {
        $(this.propertygrid).propertygrid('enableFilter', filters || []);

        return this;
      },

      // 自定义操作
      handle: function (handles) {
        let $propertygrid = $(this.propertygrid);
        let option = $propertygrid.propertygrid('options');
        if (typeof handles != 'object') handles = {};

        // 监听工具栏
        if (option.toolbar) {
          $(option.toolbar).on('click', '.handle', function () {
            let handle = $(this).data('handle') || $(this).attr('handle');
            if (handle && typeof handles[handle] == 'function') {
              let selected = $propertygrid.propertygrid('getSelected');   //当前选中的行
              let allSelected = $propertygrid.propertygrid('getSelections'); //全部选中的行

              handles[handle](this, selected, allSelected, option);
            }
          });
        }

        // 监听右键菜单
        if (option.menu) {
          $(option.menu).on('click', '.handle', function () {
            let handle = $(this).data('handle') || $(this).attr('handle');
            if (handle && typeof handles[handle] == 'function') {
              let selected = $propertygrid.propertygrid('getSelected');   //当前选中的行
              let allSelected = $propertygrid.propertygrid('getSelections'); //全部选中的行

              handles[handle](this, selected, allSelected, option);
            }
          });
        }

        return this;
      },
    }
  });

  // request方法
  $.extend($.cumuli, {
    request: {
      post: function (url, data, callback, type) {
        let option = {
          url: url,
          type: 'POST',
          data: data,
          dataType: type,

          beforeSend: function () {
            $.messager.progress({title: '数据发送中...', text: '0%', interval: false});
          },
          complete: function () {
            $.messager.progress('close');
          },
          xhr: function () {
            let xhr = $.ajaxSettings.xhr();
            if (xhr.upload) {
              // 百分比进度条
              xhr.upload.onprogress = function (event) {
                let progress = 100 * event.loaded / event.total;
                $('.messager-p-bar:first', '.messager-window').progressbar({
                  text: progress + '%',
                  value: progress
                });
              };
            }
            return xhr;
          }
        };

        // 在原有$.post方法上增加了两种数据格式(FormData 和 FORM元素)
        if (typeof data == 'object' && data.constructor.name == 'FormData') {
          option.processData = false;
          option.contentType = false;
        } else if (typeof data == 'object' && data.tagName == 'FORM') {
          option.data = new FormData(option.data);
          option.processData = false;
          option.contentType = false;
        }

        return new Promise(function (resolve, reject) {
          $.ajax($.extend({
            success: function (data, textStatus, jqXHR) {
              typeof callback == 'function' && callback.call(callback, data, textStatus, jqXHR);
              if (data.status == 'error') {
                return reject(data);
              }
              resolve(data);
            },
          }, option));
        });
      },

      get: function (url, data, callback, type) {
        return $.get(url, data, callback, type);
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
      items: ['title', 'icon', 'url', 'toolbar', 'menu', 'tools', 'id', 'name', 'lines', 'animate', 'fit', 'border'],

      /* 解析选项中自定义属性 */
      option: function () {
        let option = $.extend({}, $.cumuli.config.treegrid); //读取默认配置文件
        for (let i = 0; i < this.items.length; i++) {
          let key = this.items[i];
          let value = $(this.treegrid).data(key) || $(this.treegrid).attr(key);

          switch (key) {
            case 'title':
              if (!value) value = $('caption:first', this.treegrid).text();
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
        if (option.menu) {
          const that = this;
          option['onContextMenu'] = function (e, row) {
            if (!row) return false;

            e.preventDefault();
            $(that.treegrid).treegrid('unselectAll');
            let id = $(that.treegrid).treegrid('options').idField || 'id';
            $(that.treegrid).treegrid('select', row[id]);
            $(option.menu).menu('show', {left: e.pageX, top: e.pageY});
          };
        }

        $(this.treegrid).treegrid(option);

        return this;
      },

      // 筛选
      filter: function (filters) {
        $(this.treegrid).treegrid('enableFilter', filters || []);

        return this;
      },

      // 自定义操作
      handle: function (handles) {
        let $treegrid = $(this.treegrid);
        let option = $treegrid.treegrid('options');
        if (typeof handles != 'object') handles = {};

        // 监听工具栏
        if (option.toolbar) {
          $(option.toolbar).on('click', '.handle', function () {
            let handle = $(this).data('handle') || $(this).attr('handle');
            if (handle && typeof handles[handle] == 'function') {
              let selected = $treegrid.treegrid('getSelected');   //当前选中的行
              let allSelected = $treegrid.treegrid('getSelections'); //全部选中的行

              handles[handle](this, selected, allSelected, option);
            }
          });
        }

        // 监听右键菜单
        if (option.menu) {
          $(option.menu).on('click', '.handle', function () {
            let handle = $(this).data('handle') || $(this).attr('handle');
            if (handle && typeof handles[handle] == 'function') {
              let selected = $treegrid.treegrid('getSelected');   //当前选中的行
              let allSelected = $treegrid.treegrid('getSelections'); //全部选中的行

              handles[handle](this, selected, allSelected, option);
            }
          });
        }

        return this;
      },
    }
  });

  // url方法
  $.extend($.cumuli, {
    url: {
      // 上传地址处理
      upload: {
        // 获取带域名地址
        full: function (path) {
          return [$.cumuli.config.upload.url.replace(/\/$/, ''), path].join('/');
        },
        // 不带域名的路径
        path: function (url) {
          return url.replace($.cumuli.config.upload.url.replace(/\/$/, '') + '/', '');
        }
      }
    }
  });

})(jQuery);
