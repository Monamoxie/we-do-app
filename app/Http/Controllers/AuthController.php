<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([ 
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

         
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password], 1)) {
            return response()->json('Invalid Credentials. Please enter a valid username and password', 402);
        }
        else {  
            $user = User::where('email', $request->email)->first();
            $user->token = $user->createToken('user')->accessToken;
            return response()->json($user, 200);    
        } 
    }

    public function register(Request $request) 
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string'],
        ]);

        return User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens->each(function($token, $key) {
            $token->delete();
        });
         
        return response()->json('Logged out successfully', 200);
    }
}
