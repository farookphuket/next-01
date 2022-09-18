<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController as uAuth;
use App\Http\Controllers\RegisterController as uRegister;
use App\Http\Controllers\ProfileController as uProfile;

use App\Http\Controllers\BlogController as Blog;
use App\Http\Controllers\WhatupController as Whatup;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register',[uRegister::class,'store'])->name('register');
Route::post('/login',[uAuth::class,'store'])->name('login');

Route::get('/blog',[Blog::class,"index"]);

Route::get('/whatup',[Whatup::class,"index"]);
Route::get('/whatup/{whatup}',[Whatup::class,"show"]);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


/* #Member make a route prefix for member group */
Route::prefix("member")->name("member.")->middleware('auth:sanctum')
                                        ->group(function(){
Route::post('/logout',[uAuth::class,'destroy'])->name('logout');

// update profile
Route::resource("/profile",uProfile::class);

// whatup
Route::resource('/whatup',Whatup::class);
                                        });
