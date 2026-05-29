<?php

use Illuminate\Database\Migrations\Migration;

use Illuminate\Database\Schema\Blueprint;

use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {

        Schema::create('results', function (Blueprint $table) {

            $table->id();

            $table->foreignId('test_id')
                ->constrained()
                ->onDelete('cascade');

            $table->foreignId('user_id')
                ->constrained()
                ->onDelete('cascade');

            $table->integer('logical_score')
                ->default(0);

            $table->integer('creativity_score')
                ->default(0);

            $table->integer('communication_score')
                ->default(0);

            $table->integer('leadership_score')
                ->default(0);

            $table->integer('confidence_score')
                ->default(0);

            $table->integer('combined_score')
                ->default(0);

            $table->string('predicted_career')
                ->nullable();

            $table->float('confidence_percentage')
                ->nullable();

            $table->timestamps();

        });

    }

    public function down(): void
    {

        Schema::dropIfExists('results');

    }
};