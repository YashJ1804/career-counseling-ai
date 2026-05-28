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

    $credentials = $request->only('email', 'password');

    if (!Auth::attempt($credentials)) {

        return response()->json([

            'success' => false,

            'message' => 'Invalid Credentials'

        ], 401);
    }

    $request->session()->regenerate();

    return response()->json([

        'success' => true,

        'user' => Auth::user()

    ]);

}
  public function logout(Request $request)
{

    Auth::logout();

    $request->session()->invalidate();

    $request->session()->regenerateToken();

    return response()->json([

        'success' => true

    ]);

}
};