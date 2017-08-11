// 核心模块
require('EasyUI');
require('../../extension/datagrid-filter/datagrid-filter');
require('../../extension/jquery-easyui-color/jquery.color');
require('../../extension/jquery-easyui-etree/jquery.etree');
require('../../extension/jquery-easyui-etree/jquery.etree.lang');
require('../../extension/jquery-easyui-pivotgrid/jquery.pivotgrid');
require('../../extension/jquery-easyui-portal/jquery.portal');
require('../../extension/jquery-easyui-texteditor/jquery.texteditor');

// 自定义扩展
(function ($) {

  // 变量赋值
  $.extend($.cumuli.variable, {
    datagrid: {
      bufferview: require('../../extension/jquery-easyui-datagridview/datagrid-bufferview'),
      defaultview: require('../../extension/jquery-easyui-datagridview/datagrid-defaultview'),
      detailview: require('../../extension/jquery-easyui-datagridview/datagrid-detailview'),
      groupview: require('../../extension/jquery-easyui-datagridview/datagrid-groupview'),
      scrollview: require('../../extension/jquery-easyui-datagridview/datagrid-scrollview'),
    }
  });

  //datagrid扩展
  $.extend($.fn.datagrid.defaults.editors, {
    image: {
      init: function (container, options) {
        let html = ['<input type="image" class="datagrid-editable-input" alt="点击上传图片" title="点击上传图片" style="cursor:pointer;display:block"'];
        if (!options.accept) options.accept = 'image/gif,image/jpeg,image/jpg,image/png,image/svg';

        if (options.upload) html.push('data-upload="' + options.upload + '"');
        if (options.multiple) html.push('data-multiple="' + options.multiple + '"');
        if (options.accept) html.push('data-accept="' + options.accept + '"');

        if (options.upload && options.crop) {
          html.push('onclick="$(this).trigger(\'crop\')"');
        }
        if (options.driver) html.push('data-driver="' + options.driver + '"');
        if (options.width) html.push('data-width="' + options.width + '"');
        if (options.height) html.push('data-height="' + options.height + '"');
        if (options.fit) html.push('data-fit="' + options.fit + '"');

        if (options.upload && !options.crop) html.push('onclick="$(this).trigger(\'upload\')"');

        html.push('/>');
        return $(html.join(' ')).appendTo(container);
      },
      destroy: function (target) {
        $(target).remove();
      },
      getValue: function (target) {
        return $(target).attr('src');
      },
      setValue: function (target, value) {
        $(target).prop('src', value);
      },
      resize: function (target, width) {
        var fit = $(target).data('fit');
        if (fit) {
          $(target)._outerWidth(width);
        } else {
          $(target).css('max-width', width);
        }
      }
    },
    password: {
      init: function (container, options) {
        return $('<input type="password" class="datagrid-editable-input" />').appendTo(container);
      },
      destroy: function (target) {
        $(target).remove();
      },
      getValue: function (target) {
        return $(target).val();
      },
      setValue: function (target, value) {
        $(target).val(value);
      },
      resize: function (target, width) {
        $(target)._outerWidth(width);
      }
    },
    color: {
      init: function (container, options) {
        return $('<input type="color" class="datagrid-editable-input" />').appendTo(container);
      },
      destroy: function (target) {
        $(target).remove();
      },
      getValue: function (target) {
        return $(target).val();
      },
      setValue: function (target, value) {
        $(target).val(value);
      },
      resize: function (target, width) {
        $(target)._outerWidth(width);
      }
    }
  });

  // validatebox扩展
  $.extend($.fn.validatebox.defaults.rules, {
    equals: {
      validator: function (value, elements) {
        for (let element of elements) {
          if (value == $(element).val()) return true;
        }
        return false;
      },
      message: '两次输入不一致'
    },
    zh: {
      validator: function (value) {
        return /^[\u4e00-\u9fa5]+$/.test(value);
      },
      message: '必须为中文字符'
    },
    ip: {
      validator: function (value) {
        return /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/.test(value);
      },
      message: '必须为IP地址'
    },
    ipv6: {
      validator: function (value) {
        return /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(value);
      },
      message: '必须为IPV6地址'
    },
    idcard: {
      validator: function (value) {
        var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];// 加权因子;
        var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];// 身份证验证位值，10代表X;

        if (value.length == 15) {
          return isValidityBrithBy15IdCard(value);
        } else if (value.length == 18) {
          var a_idCard = value.split('');// 得到身份证数组
          if (isValidityBrithBy18IdCard(value) && isTrueValidateCodeBy18IdCard(a_idCard)) {
            return true;
          }
          return false;
        }
        return false;

        function isTrueValidateCodeBy18IdCard(a_idCard) {
          var sum = 0; // 声明加权求和变量
          if (a_idCard[17].toLowerCase() == 'x') {
            a_idCard[17] = 10;// 将最后位为x的验证码替换为10方便后续操作
          }
          for (var i = 0; i < 17; i++) {
            sum += Wi[i] * a_idCard[i];// 加权求和
          }
          valCodePosition = sum % 11;// 得到验证码所位置
          if (a_idCard[17] == ValideCode[valCodePosition]) {
            return true;
          }
          return false;
        }

        function isValidityBrithBy18IdCard(idCard18) {
          var year = idCard18.substring(6, 10);
          var month = idCard18.substring(10, 12);
          var day = idCard18.substring(12, 14);
          var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
          // 这里用getFullYear()获取年份，避免千年虫问题
          if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
            return false;
          }
          return true;
        }

        function isValidityBrithBy15IdCard(idCard15) {
          var year = idCard15.substring(6, 8);
          var month = idCard15.substring(8, 10);
          var day = idCard15.substring(10, 12);
          var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
          // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
          if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
            return false;
          }
          return true;
        }
      },
      message: '必须为身份证号码'
    }
  });

})(jQuery);

