<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserSocialitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_socialites', function (Blueprint $table) {
            $table->increments('id');
            $table->string('unique_id')->comment('唯一标识');
            $table->string('driver')->comment('来源');
            $table->integer('user_id')->unsigned()->comment('用户ID');
            $table->string('name')->comment('姓名');
            $table->string('nickname')->comment('昵称');
            $table->string('email')->comment('邮箱');
            $table->string('avatar')->comment('头像');
            $table->json('data')->comment('其他信息');
            $table->timestamps();
            $table->unique(['unique_id', 'driver']);
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_socialites');
    }
}
