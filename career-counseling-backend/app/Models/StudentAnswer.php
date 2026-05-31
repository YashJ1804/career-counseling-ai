<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentAnswer extends Model
{

    protected $fillable = [

        'attempt_id',

        'question',

        'selected_answer',

        'correct_answer',

        'is_correct',

        'parameter'

    ];

}