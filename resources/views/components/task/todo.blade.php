@foreach($tasks as $task)
    <x-task.sections.parent id="{{ $task->id }}">
        {{-- main section --}}
        <x-task.sections.main :$task>

            <x-task.sections.circle :$task/>

        </x-task.sections.main>

        {{-- children section --}}
        <x-task.sections.children>

            <x-task.todo :tasks="$task->child->where('is_done', 0)->sortBy('order')"/>

        </x-task.sections.children>
    </x-task.sections.parent>
@endforeach
