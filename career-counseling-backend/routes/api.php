<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\AIController;
Route::get('/gemini-test', [AIController::class, 'testGemini']);
Route::middleware('auth:sanctum')->group(function () {

    Route::post('/tests/start', [TestController::class, 'startTest']);

});

Route::get('/test', function () {

    return response()->json([
        'message' => 'API Working'
    ]);

});

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/logout', [AuthController::class, 'logout']);

Route::middleware('auth')->get('/user', [AuthController::class, 'user']);