<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentProfile extends Model
{
    protected $fillable = [

        'user_id',

        'age',

        'gender',

        'class_level',

        'stream',

        'school_name',

        'city',

        'state',

        'favorite_subjects',

        'skills',

        'career_interest'

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}