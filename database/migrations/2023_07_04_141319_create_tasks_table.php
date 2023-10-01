<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('name', 500);
            $table->text('description')->nullable();
            $table->unsignedBigInteger('parent_id')->default(0);
            $table->boolean('is_done')->default(0);
            $table->unsignedBigInteger('archive_id');
            $table->foreign('archive_id')->references('id')->on('archives')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('color')->default('#808080');
            $table->foreign('color')->references('code')->on('colors')->cascadeOnUpdate()->cascadeOnDelete();
            $table->unsignedBigInteger('order')->default(0);
            $table->date('deadline_date')->nullable();
            $table->time('deadline_time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
