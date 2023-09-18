<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class DateController extends Controller
{
    public function updateDate(Request $request): JsonResponse|string
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
            'date' => ['string', 'date'],
        ]);

        $task = $user->tasks()->find($data['id']);

        if ($task->deadline_time === null) {
            $data['time'] = '23:59';
        } else {
            $data['time'] = $task->deadline_time;
        }

        $task->update([
            'deadline_date' => $data['date'],
            'deadline_time' => $data['time'],
        ]);

        return 'updated';
    }
}
