<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactFormController;

Route::inertia('/', 'welcome')->name('home');

Route::get('/ContactForm', [ContactFormController::class, 'create']);
Route::post('/ContactForm', [ContactFormController::class, 'store']);