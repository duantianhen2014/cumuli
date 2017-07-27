# 模块目录

> 为了方便开发模块,特意增加了一个本地目录

**自动创建模块**

```
php artisan make:module group/name
```

**更新模块缓存**

```
php artisan module:cache
```

## 使用方法

1. 只需要按照composer包规范写好插件

2. 然后执行`composer dumpautoload`命令即可

3. 如果php增加新的文件,则再次执行`composer dumpautoload`

4. 也可将开发好的包发布到composer仓库上

## 其他说明

如果需要以插件形式发布，可以在本地搭建composer私有仓库进行测试，建议使用 `toran proxy`
