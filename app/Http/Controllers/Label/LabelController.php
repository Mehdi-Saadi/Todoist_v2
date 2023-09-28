<?php

namespace App\Http\Controllers\Label;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LabelController extends Controller
{
    public function create(Request $request)
    {
        $user = auth()->user();



    }

    public function delete(Request $request)
    {
        $user = auth()->user();

    }
}
