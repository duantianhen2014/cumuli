<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlowProgressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flow_progresses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('flow_id')->unsigned()->comment('流程ID');
            $table->integer('progress')->unsigned()->default(0)->comment('进度');
            $table->string('status')->default('wait')->comment('状态');
            $table->text('log')->default('[]')->comment('操作记录');

            // 多态关联
            $table->string('task_type')->comment('任务类型');
            $table->integer('task_id')->unsigned()->comment('任务ID');

            $table->timestamps();
            $table->unique(['task_type', 'task_id']);
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
        Schema::dropIfExists('flow_progresses');
    }
}
