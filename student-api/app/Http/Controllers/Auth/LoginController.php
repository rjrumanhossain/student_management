<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\HasApiTokens;

class LoginController extends Controller
{
    use HasApiTokens;

    public function login_d(){
        return response()->json([
            'mesage' => 'unautorize'
        ]);
    }


    public function login(Request $request){
  
        $validatedData = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);
        // if($validatedData){
        //     // return response()->json([
        //     //     'error' => $validatedData->error()
        //     // ]);
        // }


        if( Auth::attempt(['email' => $request->email, 'password' => $request->password]) ){
            $user = Auth::user();

            $data['token_type'] ='Bearar';
            $data['token']      = $user->createToken('TokenName')->accessToken;
            $data['user']       = $user;

            return response()->json($data);

        }else{
            $data['LoginError'] = 'your Credetial is Wrong';

            return response()->json([
                'error' => $data
            ]);
        }

    }


    public function logout(){
        Auth::user()->token()->revoke();
        return response()->json([
            'msg' => 'Your are logout successfully'
        ]);
    }
}
