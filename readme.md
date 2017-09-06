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

## 初始化脚本

**通过composer方式**
```
composer create-project wangdong/cumuli cumuli
cd cumuli
php artisan cumuli:install
```

**其他方式**
```
git clone https://github.com/repertory/cumuli.git cumuli
cd cumuli
composer install
php -r "file_exists('.env') || copy('.env.example', '.env');"
php artisan cumuli:install
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

2.0.0版本开始调整为MIT协议
