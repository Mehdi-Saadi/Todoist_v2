<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Label as LabelModel;

class Label extends Component
{
    public $tasks;
    public $label;

    public function mount(LabelModel $label): void
    {
        $this->authorize('view', $label);
        $this->tasks = $label->tasks()->where('is_done', 0)->get();
        $this->label = $label;
    }

    public function render()
    {
        return view('livewire.label');
    }
}
