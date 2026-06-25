<?php

namespace App\Http\Controllers;

use App\Models\ContactForm;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response; 
use Illuminate\Http\RedirectResponse; 

class ContactFormController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('ContactForm');
    }
 
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|unique:contact_forms,email',
            'phone'   => 'required|string|max:20',
            'message' => 'required|string|max:1000',
        ]);
 
        ContactForm::create($validated);
 
        return redirect()->back()->with('success', 'Pesan berhasil dikirim!');
    }
}