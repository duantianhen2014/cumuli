<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStructureUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('structure_users', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->integer('structure_id')->unsigned()->comment('组织结构ID');
            $table->integer('user_id')->unsigned()->comment('用户ID');
            $table->unique(['structure_id', 'user_id']);
            $table->foreign('structure_id')->references('id')->on('structures');
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
        Schema::dropIfExists('structure_users');
    }
}
