<?php

namespace App\Livewire;

use Livewire\Component;

class Today extends Component
{
    public $tasks;

    public function mount()
    {
        $this->tasks = auth()->user()->tasks->where('parent_id', 0)->where('is_done', 0)->sortBy('order');
    }

    public function render()
    {
        return view('livewire.today');
    }
}
