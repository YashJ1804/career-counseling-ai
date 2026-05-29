<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [

        'test_id',
        'question',
        'parameter',
        'difficulty',
        'marks',
        'options',
        'correct_answer',
        'ai_explanation'

    ];

    protected $casts = [

        'options' => 'array'

    ];

    public function test()
    {

        return $this->belongsTo(Test::class);

    }

    public function answers()
    {

        return $this->hasMany(Answer::class);

    }
}