<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function regiser(Request $request){
        $validated = Validator::make($request->all(),[
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
            'phone'     => 'required|min:6|max:14'
        ]);


        if($validated->fails()){
            return response()->json([
                'message' => $validated->errors()
            ]);
        }

        //Registration  condition

            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->password =Hash::make($request->password);

            if($user->save()){

                $data['token_type'] ='Bearar';
                $data['token']      = $user->createToken('TokenName')->accessToken;
                $data['user']       = $user;

                return response()->json($data);
            }



            return response()->json([
                'msg'=> 'Please Complete Your Input Filed'
            ]);

    }


}
