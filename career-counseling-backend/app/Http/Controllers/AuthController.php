<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function register(Request $request)
    {

        $request->validate([

            'name' => 'required',

            'email' => 'required|email|unique:users',

            'password' => 'required|min:6',

            'role' => 'required'

        ]);

        $user = User::create([

            'name' => $request->name,

            'email' => $request->email,

            'password' => Hash::make($request->password),

            'role' => $request->role

        ]);

        return response()->json([

            'success' => true,

            'message' => 'User Registered Successfully',

            'user' => $user

        ]);

    }

public function login(Request $request)
{

    $request->validate([

        'email' => 'required|email',

        'password' => 'required'

    ]);

    $credentials = $request->only('email', 'password');

    if (!Auth::attempt($credentials)) {

        return response()->json([

            'success' => false,

            'message' => 'Invalid Credentials'

        ], 401);
    }

    $user = Auth::user();

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([

        'success' => true,

        'token' => $token,

        'user' => $user

    ]);

}
public function logout(Request $request)
{
    $user = auth()->user();

    if (!$user) {

        return response()->json([
            'success' => false,
            'message' => 'Already logged out'
        ], 200);

    }

    $user->tokens()->delete();

    return response()->json([
        'success' => true,
        'message' => 'Logged out successfully'
    ]);
}
public function user(Request $request)
{
    return response()->json($request->user());
}
};