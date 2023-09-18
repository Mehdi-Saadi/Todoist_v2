<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Route;

if (! function_exists('controlDate')) {
    function controlDate($task): string
    {
        if (! $task->deadline_date) {
            return '<span class="flex items-center" id="task-deadline-' . $task->id . '"></span>';
        }

        $date = strtotime($task->deadline_date);

        $today = Carbon::today()->timestamp;
        $tomorrow = $today + 86400;
        $thirdDay = $tomorrow + 86400;
        $fourthDay = $thirdDay + 86400;
        $fifthDay = $fourthDay + 86400;
        $sixthDay = $fifthDay + 86400;
        $seventhDay = $sixthDay + 86400;
        $eighthDay = $seventhDay + 86400;

        if (Route::currentRouteName() === 'today' && $date === $today) {
            return '<span class="flex items-center" id="task-deadline-' . $task->id . '"></span>';
        }

        switch ($date) {
            case $today:
                $day = 'Today';
                $title = date('D d M Y', $today);
                $color = 'text-green-700';
                break;
            case $tomorrow:
                $day = 'Tomorrow';
                $title = date('D d M Y', $tomorrow);
                $color = 'text-yellow-600';
                break;
            case $thirdDay:
                $day = date('l', $thirdDay);
                $title = date('D d M Y', $thirdDay);
                $color = 'text-purple-600';
                break;
            case $fourthDay:
                $day = date('l', $fourthDay);
                $title = date('D d M Y', $fourthDay);
                $color = 'text-purple-600';
                break;
            case $fifthDay:
                $day = date('l', $fifthDay);
                $title = date('D d M Y', $fifthDay);
                $color = 'text-purple-600';
                break;
            case $sixthDay:
                $day = date('l', $sixthDay);
                $title = date('D d M Y', $sixthDay);
                $color = 'text-purple-600';
                break;
            case $seventhDay:
                $day = date('l', $seventhDay);
                $title = date('D d M Y', $seventhDay);
                $color = 'text-purple-600';
                break;
            case $eighthDay:
                $day = date('l', $eighthDay);
                $title = date('D d M Y', $eighthDay);
                $color = 'text-purple-600';
                break;
            default:
                $day = date('d M', $date);
                $title = date('D d M Y', $date);
                $color = '';
        }

        return '<span class="flex items-center ' . $color . '" id="task-deadline-' . $task->id . '" title="' . $title . '"><svg class="w-4 h-4 mr-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12 10a1 1 0 11-2 0 1 1 0 012 0zM7 8a.5.5 0 000 1h10a.5.5 0 000-1H7z" fill="currentColor"></path></svg>' . $day .'</span>';
    }
}

if (! function_exists('addClassIfRouteIsActive')) {
    function addClassIfRouteIsActive($key, $class)
    {
        if (is_array($key)) {
            return in_array(Route::currentRouteName(), $key) ? $class : '';
        }

        return Route::currentRouteName() === $key ? $class : '';
    }
}

if (! function_exists('getNextMonDate')) {
    function getNextMonDate($format): string
    {
        $date = Carbon::today()->timestamp;
        // check if today is monday
        if (date('D') === 'Mon') {
            $date += 86400;
        }

        while (true) {
            if (date('D', $date) === 'Mon') {
                break;
            }
            $date += 86400;
        }

        return date($format, $date);
    }
}
