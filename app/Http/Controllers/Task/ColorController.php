<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ColorController extends Controller
{
    public function updateColor(Request $request): JsonResponse|string
    {
        // ajax request required
        if(! $request->ajax()) {
            return response()->json([
                'status' => 'ajax required',
            ]);
        }

        $user = auth()->user();

        $data = $request->validate([
            'id' => [Rule::exists('tasks', 'id')->where('user_id', $user->id)],
            'color' => [Rule::in(['#db4035', '#ff9933', '#4073ff', '#808080'])],
        ]);

        $task = $user->tasks()->find($data['id']);
        $task->update([
            'color' => $data['color']
        ]);

        return 'sync';
    }
}
