<div class="relative w-5 h-5 mr-2 group/circle">
    <x-icon.circle class="w-full h-full absolute" style="color: {{ $task->color }};background: {{ $task->color }}14;" id="task-circle-{{ $task->id }}"/>
    <x-icon.circle-check class="opacity-0 w-5 h-5 absolute group-hover/circle:opacity-100 rounded-full transition duration-300" style="color: {{ $task->color }};"/>
</div>
