<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TestAttempt extends Model
{

    protected $fillable = [

        'user_id',

        'score',

        'total_marks',

        'percentage',

        'performance',

        'career_prediction'

    ];

}