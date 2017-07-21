<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoleAccessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_accesses', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->integer('role_id')->unsigned()->comment('角色ID');
            $table->string('group')->comment('模块group，*表示任意');
            $table->string('name')->comment('模块name，*表示任意');
            $table->string('action')->comment('模块action，*表示任意');
            $table->timestamps();
            $table->foreign('role_id')->references('id')->on('roles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_accesses');
    }
}
