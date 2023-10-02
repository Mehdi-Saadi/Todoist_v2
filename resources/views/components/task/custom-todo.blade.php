{{-- show today tasks, if task not for today, check its children --}}
@foreach($tasks as $task)
    <x-task.sections.parent id="{{ $task->id }}">
        {{-- main section --}}
        <x-task.sections.main :$task>

            <x-task.sections.circle :$task/>

        </x-task.sections.main>
    </x-task.sections.parent>
@endforeach
