<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\AIController;
use Illuminate\Http\Request;
use App\Http\Controllers\StudentProfileController;


Route::middleware('auth:sanctum')->group(function () {

    Route::post(
        '/profile',
        [StudentProfileController::class, 'store']
    );

    Route::get(
        '/profile',
        [StudentProfileController::class, 'show']
    );

});

Route::post('/generate-questions', [AIController::class, 'generateQuestions']);
Route::middleware('auth:sanctum')->group(function () {

    Route::post('/tests/start', [TestController::class, 'startTest']);

});

Route::get('/test', function () {

    return response()->json([
        'message' => 'API Working'
    ]);

});
Route::get(
    '/questions/{testId}',
    [AIController::class, 'fetchQuestions']
);
Route::middleware('auth:sanctum')->post(

    '/submit-test',

    [AIController::class, 'submitTest']

);
Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/logout', [AuthController::class, 'logout']);


Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'user']);


Route::get('/check-token', function (Request $request) {

    return response()->json([
        'user' => $request->user(),
        'token' => $request->bearerToken()
    ]);

})->middleware('auth:sanctum');