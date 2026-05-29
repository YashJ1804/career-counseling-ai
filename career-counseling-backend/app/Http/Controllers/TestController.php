<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Test;

class TestController extends Controller
{
    public function startTest(Request $request)
    {

        $user = $request->user();

        $test = Test::create([

            'user_id' => $user->id,

            'status' => 'started',

            'total_questions' => 30,

            'total_marks' => 0,

            'started_at' => now()

        ]);

        return response()->json([

            'success' => true,

            'message' => 'Test Started Successfully',

            'test' => $test

        ]);

    }
}