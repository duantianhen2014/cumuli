<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flows', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->string('name')->comment('名称');
            $table->string('description')->nullable()->comment('描述');
            $table->string('code')->unique()->comment('编号');
            $table->integer('progress')->unsigned()->default(0)->comment('进度');
            $table->string('status')->default('wait')->comment('状态');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flows');
    }
}
