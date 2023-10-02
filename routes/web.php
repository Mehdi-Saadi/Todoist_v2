<?php

use App\Livewire\App;
use App\Livewire\Today;
use App\Livewire\FiltersLabels;
use App\Livewire\Label;
use App\Http\Controllers\Task\ColorController;
use App\Http\Controllers\Task\DateController;
use App\Http\Controllers\Task\OrderController as TaskOrderController;
use App\Http\Controllers\Task\TaskController;
use App\Http\Controllers\Label\OrderController as LabelOrderController;
use App\Http\Controllers\Label\LabelController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('/app')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', App::class)->name('app');
    Route::get('/today', Today::class)->name('today');
    Route::get('/filters-labels', FiltersLabels::class)->name('filters.labels');
    Route::get('/label/{label}', Label::class)->name('label');
});

Route::prefix('/task')->middleware(['auth', 'verified', 'ajax.request'])->group(function () {
    Route::post('/create', [TaskController::class, 'create']);
    Route::delete('/destroy', [TaskController::class, 'destroy']);
    Route::put('/sort', [TaskOrderController::class, 'sort']);

    Route::prefix('/update')->group(function () {
        Route::put('/color', [ColorController::class, 'updateColor']);
        Route::put('/date', [DateController::class, 'updateDate']);
    });
});

Route::prefix('/label')->middleware(['auth', 'verified', 'ajax.request'])->group(function () {
    Route::post('/create', [LabelController::class, 'create']);
    Route::delete('/destroy', [LabelController::class, 'destroy']);
    Route::put('/sort', [LabelOrderController::class, 'sort']);
});

Route::get('/logout', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'destroy']);

require __DIR__.'/auth.php';
