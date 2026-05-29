<?php

use Illuminate\Database\Migrations\Migration;

use Illuminate\Database\Schema\Blueprint;

use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {

        Schema::create('questions', function (Blueprint $table) {

            $table->id();

            $table->foreignId('test_id')
                ->constrained()
                ->onDelete('cascade');

            $table->text('question');

            $table->string('parameter');

            $table->string('difficulty')
                ->default('medium');

            $table->integer('marks')
                ->default(5);

            $table->json('options')
                ->nullable();

            $table->string('correct_answer')
                ->nullable();

            $table->text('ai_explanation')
                ->nullable();

            $table->timestamps();

        });

    }

    public function down(): void
    {

        Schema::dropIfExists('questions');

    }
};