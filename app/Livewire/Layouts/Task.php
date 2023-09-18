<?php

namespace App\Livewire\Layouts;

use Livewire\Attributes\Locked;
use Livewire\Component;

class Task extends Component
{
    #[Locked]
    public $user;
    public $tasks;
    public bool $showTodo;

    public function mount()
    {
        $this->user = auth()->user();
        $this->showTodo();
    }

    public function showAll()
    {
        $this->tasks = $this->user->tasks->where('parent_id', 0)->sortBy('order');
        $this->showTodo = false;
    }

    public function showTodo()
    {
        $this->tasks = $this->user->tasks->where('parent_id', 0)->where('is_done', 0)->sortBy('order');
        $this->showTodo = true;
    }

    public function render()
    {
        return view('livewire.layouts.task');
    }
}
