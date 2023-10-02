<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Label as LabelModel;

class Label extends Component
{
    public $tasks;

    public function mount(LabelModel $label)
    {
        $this->authorize('view', $label);
        $this->tasks = $label->tasks()->where('parent_id', 0)->where('is_done', 0)->get();
    }

    public function render()
    {
        return view('livewire.label');
    }
}
