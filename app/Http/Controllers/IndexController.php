<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia; 

class IndexController extends Controller
{
    public function index(){
        return Inertia::render('Home' , [
            // передается в Home.vue
            'title' => 'Home page'
        ]);
    }

     public function about(){
        return Inertia::render('About' , [
            // передается в Home.vue
            'title' => 'About page'
        ]);
    }
}
