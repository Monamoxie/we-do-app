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
            'password' => ['required', 'string', 'min:8'],
        ]);

         
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password], 1)) {
            return response()->json('Invalid Credentials. Please enter a valid username and password', 402);
        }
        else {  
            $user = User::where('email', $request->email)->first();
            $user->token = $user->createToken('user')->accessToken;
            return response()->json($user, 200);    
        }

        $http =  new Client;

        try {
            $response =  $http->post('http://127.0.0.1:9090/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => 2,
                    'client_secret' => 'eVlnmMr10TgmcygDdni9C72OwoXWpjsZu5wyApie',
                    'username' => $request->username,
                    'password' => $request->password                    
                ]
            ]);
            return $response->getBody();
        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {
            if($e->getCode() === 400) {
                return response()->json('Invalid Request. Please enter a username or a password', $e->getCode());
            }
            else if($e->getCode() === 401) {
                return response()->json('Invalid credentials. Please try again', $e->getCode());
            }
            return response()->json('An error occured', $e->getCode());
        }
    }

    public function register(Request $request) 
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
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
