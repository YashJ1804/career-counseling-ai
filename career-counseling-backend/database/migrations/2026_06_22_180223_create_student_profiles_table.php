<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('student_profiles', function (Blueprint $table) {

            $table->id();

            $table->foreignId('user_id')
                  ->constrained()
                  ->onDelete('cascade');

            $table->integer('age')->nullable();

            $table->string('gender')->nullable();

            $table->string('class_level')->nullable();

            $table->string('stream')->nullable();

            $table->string('school_name')->nullable();

            $table->string('city')->nullable();

            $table->string('state')->nullable();

            $table->text('favorite_subjects')->nullable();

            $table->text('skills')->nullable();

            $table->text('career_interest')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('student_profiles');
    }
};