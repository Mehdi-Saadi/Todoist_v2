<?php

namespace App\Livewire;

use Livewire\Component;

class Today extends Component
{
    public $tasks;

    public function mount()
    {
        $this->tasks = auth()->user()->tasks->where('is_done', 0)->where('deadline_date', date('Y-m-d'))->sortBy('id');
    }

    public function render()
    {
        return view('livewire.today');
    }
}
