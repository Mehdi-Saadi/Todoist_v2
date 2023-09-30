<?php

namespace App\Http\Controllers\Label;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function sort(Request $request): string
    {
        $this->setOrder(auth()->user(), $request);

        return 'sync';
    }

    /**
     * sets the order of given labels
     * @param $user
     * @param $submittedLabels
     * @return void
     */
    protected function setOrder($user, $submittedLabels): void
    {
        $submittedLabels = collect($submittedLabels);
        $submittedLabels->each(function ($label, $number) use ($user) {
            $userLabel = $user->labels()->findOrFail($label['id']);
            $userLabel->update([
                'order' => ++$number,
            ]);
        });
    }
}
