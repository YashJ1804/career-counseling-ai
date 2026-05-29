<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    protected $fillable = [

        'user_id',
        'status',
        'total_questions',
        'total_marks',
        'started_at',
        'completed_at'

    ];

    public function user()
    {

        return $this->belongsTo(User::class);

    }

    public function questions()
    {

        return $this->hasMany(Question::class);

    }

    public function result()
    {

        return $this->hasOne(Result::class);

    }
}