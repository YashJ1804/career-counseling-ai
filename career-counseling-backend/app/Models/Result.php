<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $fillable = [

        'test_id',
        'user_id',
        'logical_score',
        'creativity_score',
        'communication_score',
        'leadership_score',
        'confidence_score',
        'combined_score',
        'predicted_career',
        'confidence_percentage'

    ];

    public function test()
    {

        return $this->belongsTo(Test::class);

    }

    public function user()
    {

        return $this->belongsTo(User::class);

    }
}