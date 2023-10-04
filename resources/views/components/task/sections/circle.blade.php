<div class="relative w-5 h-5 mr-2 group/circle" style="color: {{ $task->color }};" id="task-circle-{{ $task->id }}">
    <x-icon.circle class="w-full h-full absolute" style="background: {{ $task->color }}14;"/>
    <x-icon.circle-check class="opacity-0 w-5 h-5 absolute group-hover/circle:opacity-100 rounded-full transition duration-300"/>
</div>
