<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * sort tasks on drop
     * @param Request $request
     * @return string
     */
    public function sort(Request $request): string
    {
        $this->setOrder(auth()->user(), $request);

        return 'sync';
    }

    /**
     * sets the order of given tasks
     * @param $user
     * @param $submittedTasks
     * @param int $parent_id
     * @return void
     */
    protected function setOrder($user, $submittedTasks, int $parent_id = 0): void
    {
        $submittedTasks = collect($submittedTasks);
        $submittedTasks->each(function ($task, $number) use ($user, $parent_id) {
            $userTask = $user->tasks()->findOrFail($task['id']);
            $userTask->update([
                'parent_id' => $parent_id,
                'order' => ++$number,
            ]);
            if(! empty($task['children'])) {
                $this->setOrder($user, $task['children'], $task['id']);
            }
        });
    }
}
