<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TaskController extends Controller
{
    public function create(Request $request): JsonResponse
    {
        // ajax request required
        if(! $request->ajax()) {
            return response()->json([
                'status' => 'ajax required',
            ]);
        }

        $user = auth()->user();

        $data = $request->validate([
            'archive_id' => [Rule::exists('archives', 'id')->where('user_id', $user->id)],
            'color' => [Rule::in(['#db4035', '#fad000', '#4073ff', '#808080'])],
            'label' => ['max:255'],
            'name' => ['required'],
            'description' => ['max:255'],
        ]);

        if($request['parent_id'] != 0) {
            $data += $request->validate([
                'parent_id' => [Rule::exists('tasks', 'id')->where('user_id', $user->id)],
            ]);
        } else {
            $data += $request->validate([
                'parent_id' => ['required'],
            ]);
        }

        // add the submited task at end of list for first time
        $data['order'] = $user->tasks()->where('parent_id', $request['parent_id'])->max('order');
        ++$data['order'];

        $task = $user->tasks()->create($data);

        $user->labels()->firstOrCreate([

        ]);

        return response()->json($task);
    }

    public function destroy(Request $request): JsonResponse|string
    {
        // ajax request required
        if(! $request->ajax()) {
            return response()->json([
                'status' => 'ajax required',
            ]);
        }

        $this->destroyTasks(auth()->user(), $request);

        return 'deleted';
    }

    public function setTaskDone(Request $request): JsonResponse|string
    {
        // ajax request required
        if(! $request->ajax()) {
            return response()->json([
                'status' => 'ajax required',
            ]);
        }

        $this->setDone(auth()->user(), $request);

        return 'done';
    }

    public function setTaskNotDone(Request $request): JsonResponse|string
    {
        // ajax request required
        if(! $request->ajax()) {
            return response()->json([
                'status' => 'ajax required',
            ]);
        }

        $this->setNotDone(auth()->user(), $request);

        return 'not done';
    }

    /**
     * sets is_done to 1 for each given task
     * @param $user
     * @param $submittedTasks
     * @return void
     */
    protected function setDone($user, $submittedTasks): void
    {
        $submittedTasks = collect($submittedTasks);
        $submittedTasks->each(function ($task) use ($user) {
            $userTask = $user->tasks()->findOrFail($task['id']);
            $userTask->update([
                'is_done' => 1,
            ]);
            if(! empty($task['children'])) {
                $this->setDone($user, $task['children']);
            }
        });
    }

    /**
     * sets is_done to 0 for each given task
     * @param $user
     * @param $submittedTasks
     * @return void
     */
    protected function setNotDone($user, $submittedTasks): void
    {
        $submittedTasks = collect($submittedTasks);
        $submittedTasks->each(function ($task) use ($user) {
            $userTask = $user->tasks()->findOrFail($task['id']);
            $userTask->update([
                'is_done' => 0,
            ]);
            if(! empty($task['parent'])) {
                $this->setNotDone($user, $task['parent']);
            }
        });
    }

    /**
     * delete all given tasks
     * @param $user
     * @param $submittedTasks
     * @return void
     */
    protected function destroyTasks($user, $submittedTasks): void
    {
        $submittedTasks = collect($submittedTasks);
        $submittedTasks->each(function ($task) use ($user) {
            $userTask = $user->tasks()->findOrFail($task['id']);
            $userTask->delete();
            if(! empty($task['children'])) {
                $this->destroyTasks($user, $task['children']);
            }
        });
    }
}

// todo if user changes the 'task id' and did an action in 'delete', 'set done', 'set not done' and 'set order'; must not occure an error...
