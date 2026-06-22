<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentProfile;

class StudentProfileController extends Controller
{
    public function store(Request $request)
    {
        $profile = StudentProfile::updateOrCreate(

            [
                'user_id' => auth()->id()
            ],

            [
                'age' => $request->age,
                'gender' => $request->gender,
                'class_level' => $request->class_level,
                'stream' => $request->stream,
                'school_name' => $request->school_name,
                'city' => $request->city,
                'state' => $request->state,
                'favorite_subjects' => $request->favorite_subjects,
                'skills' => $request->skills,
                'career_interest' => $request->career_interest
            ]
        );

        return response()->json([
            'success' => true,
            'profile' => $profile
        ]);
    }

    public function show()
    {
        return response()->json(

            StudentProfile::where(
                'user_id',
                auth()->id()
            )->first()

        );
    }
}