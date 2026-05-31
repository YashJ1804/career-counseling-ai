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
    Schema::create('student_answers', function (Blueprint $table) {

        $table->id();

        $table->foreignId('attempt_id')
            ->constrained('test_attempts')
            ->onDelete('cascade');

        $table->text('question');

        $table->string('selected_answer');

        $table->string('correct_answer');

        $table->boolean('is_correct');

        $table->string('parameter')
            ->nullable();

        $table->timestamps();

    });
}
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_answers');
    }
};
