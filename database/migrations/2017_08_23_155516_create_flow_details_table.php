<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlowDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flow_details', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->integer('flow_id')->unsigned()->comment('流程ID');
            $table->string('form')->comment('表单页面链接');
            $table->string('view')->comment('查看页面链接');
            $table->string('checkers')->comment('审核人');
            $table->timestamps();
            $table->foreign('flow_id')->references('id')->on('flows');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flow_details');
    }
}
