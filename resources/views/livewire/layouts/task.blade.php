<x-task.sections.children id="nestedRoot">
    {{-- check must show all tasks or just tdo tasks --}}
    @if($showTodo)
        <x-task.todo :$tasks/>
    @else
        <x-task.all :$tasks/>
    @endif
</x-task.sections.children>
