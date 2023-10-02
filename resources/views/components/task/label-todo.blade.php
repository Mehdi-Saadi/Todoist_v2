{{-- show today tasks, if task not for today, check its children --}}
@foreach($tasks as $task)
    @if($task->deadline_date === date('Y-m-d'))
        <x-task.sections.parent id="{{ $task->id }}">
            {{-- main section --}}
            <x-task.sections.main :$task>

                <x-task.sections.circle :$task/>

            </x-task.sections.main>

            {{-- children section --}}
            <x-task.sections.children>

                <x-task.label-todo :tasks="$task->child->where('is_done', 0)->sortBy('order')"/>

            </x-task.sections.children>
        </x-task.sections.parent>
    @else
        <x-task.label-todo :tasks="$task->child->where('is_done', 0)->sortBy('order')"/>
    @endif
@endforeach
