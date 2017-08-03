<div style="padding: 0 10px">
    <p>姓名： {{ $user->name }}</p>
    <p>角色： {{ $user->roles()->get()->pluck('name')->implode(',') }}</p>
    <p>邮箱： {{ $user->email }}</p>
    <p>注册时间： {{ $user->created_at }}</p>
</div>
