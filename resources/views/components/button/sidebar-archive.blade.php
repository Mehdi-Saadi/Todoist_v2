<div class="grid grid-cols-9 rounded text-sm hover:bg-zinc-200 group">
    <a href="{{ $href }}" class="flex items-center px-3 py-1 col-span-8"><x-icon.dot class="w-3 h-3 mr-2" style="color: {{ $color }}"/><span>{{ $slot }}</span></a>
    <button type="button" class="p-0.5 col-span-1 hidden group-hover:block"><x-icon.ellipsis-horizontal class="w-6 h-6 text-gray-500 hover:text-gray-700 rounded"/></button>
</div>
