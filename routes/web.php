<?php

use Illuminate\Support\Facades\Route;

//Route::inertia('/', 'Welcome')->name('home');

Route::get('/', [\App\Http\Controllers\IndexController::class,'index'])->name('home');
Route::get('/about', [\App\Http\Controllers\IndexController::class,'about'])->name('about');

