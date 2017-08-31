# Cumuli系统

[![Latest Stable Version](https://poser.pugx.org/wangdong/cumuli/version)](https://packagist.org/packages/wangdong/cumuli) 
[![Latest Unstable Version](https://poser.pugx.org/wangdong/cumuli/v/unstable)](https://packagist.org/packages/wangdong/cumuli) 
[![Total Downloads](https://poser.pugx.org/wangdong/cumuli/downloads)](https://packagist.org/packages/wangdong/cumuli) 
[![License](https://poser.pugx.org/wangdong/cumuli/license)](https://packagist.org/packages/wangdong/cumuli)
[![composer.lock available](https://poser.pugx.org/wangdong/cumuli/composerlock)](https://packagist.org/packages/wangdong/cumuli)

## 捐赠作者

<img src="resources/assets/img/alipay.png" width="240" alt="支付宝捐赠" />

## 开发前准备

1. 安装编辑器插件: http://editorconfig.org/#download
2. 安装composer命令: 参考https://getcomposer.org
3. 安装node.js >= 6.0，下载地址: https://nodejs.org

## 数据库支持

1. mysql
   - 创建数据库`mysql -e "create database cumuli"`
   - 修改.env中`DB_CONNECTION=mysql`
   - 修改.env中`DB_`开头其他配置
2. postgresql
   - root用户下创建数据库`runuser -l postgres -c "psql -c 'create database cumuli'"`
   - 修改.env中`DB_CONNECTION=pgsql`
   - 修改.env中`DB_`开头其他配置
3. sqlite 
   - 创建数据库`touch database/database.sqlite`
   - 修改.env中`DB_CONNECTION=sqlite`
   - 移除.env中其他`DB_`开头配置
4. sqlserver (未测试)

## 配置国内加速

**配置composer**

```
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

**配置npm**

```
npm install -g nrm --registry=https://registry.npm.taobao.org
nrm use taobao
```

**配置node-sass**

> linux或mac配置

```
echo 'sass_binary_site=https://npm.taobao.org/mirrors/node-sass/' >> ~/.npmrc
```

> windows配置

打开 `环境变量 -> 新建`，进行如下设置

- 变量名(N): `SASS_BINARY_SITE`
- 变量值(V): `https://npm.taobao.org/mirrors/node-sass/`

## 初始化脚本

**通过composer方式**
```
composer create-project wangdong/cumuli cumuli
cd cumuli
php artisan install
```

**其他方式**
```
git clone https://github.com/repertory/cumuli.git cumuli
cd cumuli
composer install
php -r "file_exists('.env') || copy('.env.example', '.env');"
php artisan install
```

## 开发模块

[模块开发文档](module/README.md)

## 工作流使用

> 只需要在当前model中定义下面代码即可 (>= 1.2.0)

```
// 绑定工作流，与flow表code对应
public $flowCode = '24002133e3';

// 事件监听
protected $events = [
    'created' => BindFlowEvent::class,
];

/**
 * 多态关联工作流
 * @return \Illuminate\Database\Eloquent\Relations\MorphMany
 */
public function progresses()
{
    return $this->morphMany('App\FlowProgress', 'task');
}
```

## nginx配置

```
server {
    listen       80;
    server_name  cumuli.dev;
    root         /var/www/html/cumuli/public;

    location / {
        index  index.html index.htm index.php;
        try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```

## 开源协议

> 由于前端部分引入了 `jQuery EasyUI` 并仅作为类库使用，同时未对其进行任何修改

本项目采用MIT协议(EasyUI代码除外，仍需遵守GPL协议)，也就是双协议(MIT + GPL)
