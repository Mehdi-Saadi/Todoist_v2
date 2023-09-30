<?php

namespace App\Http\Controllers\Label;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class LabelController extends Controller
{
    public function create(Request $request): JsonResponse
    {
        $user = auth()->user();

        $data = $request->validate([
            'color' => [Rule::exists('colors', 'code')],
            'name' => ['required', Rule::unique('labels', 'name')->where('user_id', $user->id)],
        ]);

        $data['order'] = $user->labels()->max('order');
        ++$data['order'];

        $label = $user->labels()->create($data);

        return response()->json($label);
    }

    public function destroy(Request $request)
    {
        $user = auth()->user();

    }
}
