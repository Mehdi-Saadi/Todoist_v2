<div class="@if($sidebarIsClose === true) -translate-x-full @else translate-x-0 @endif fixed h-full left-0 bg-zinc-50 z-30 transition duration-300 w-[288px]" id="sidebar" data-is-close="@if($sidebarIsClose === true){{ 'true' }}@else{{ 'false' }}@endif">
    <div class="mt-8">
        <div class="flex flex-col m-5 space-y-1">
            <x-button.sidebar-main href="{{ route('app') }}" class="{{ addClassIfRouteIsActive('app', 'bg-zinc-200') }}" wire:navigate><x-icon.inbox class="w-6 h-6 text-blue-600 mr-1"/>Inbox</x-button.sidebar-main>
            <x-button.sidebar-main href="{{ route('today') }}" class="{{ addClassIfRouteIsActive('today', 'bg-zinc-200') }}" wire:navigate><x-icon.calendar.today class="w-6 h-6 text-green-700 mr-1"/>Today</x-button.sidebar-main>
            <x-button.sidebar-main href="#" class=""><x-icon.calendar.days class="w-6 h-6 text-purple-700 mr-1"/>Upcoming</x-button.sidebar-main>
            <x-button.sidebar-main href="{{ route('filters.labels') }}" class="{{ addClassIfRouteIsActive('filters.labels', 'bg-zinc-200') }}" wire:navigate><x-icon.squares class="w-6 h-6 text-orange-800 mr-1"/>Filters & Labels</x-button.sidebar-main>
        </div>

        {{-- archives --}}
        <div class="flex flex-col m-5 space-y-1">
            <div class="grid grid-cols-9 rounded text-xs hover:bg-zinc-200 group font-medium">
                <a href="#" class="flex items-center px-3 py-2 col-span-8">Archives</a>
                <button type="button" class="p-1 col-span-1 hidden group-hover:block"><x-icon.plus-small class="w-5 h-5 text-gray-600 hover:bg-zinc-100 rounded mr-1"/></button>
            </div>
            <x-button.sidebar-archive href="#" color="#b8258f">Home</x-button.sidebar-archive>
            <x-button.sidebar-archive href="#" color="#afb83b">Education</x-button.sidebar-archive>
            <x-button.sidebar-archive href="#" color="#884dff">Work</x-button.sidebar-archive>
        </div>
    </div>
</div>
