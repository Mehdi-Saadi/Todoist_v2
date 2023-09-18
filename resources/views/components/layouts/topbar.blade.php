<div class="fixed w-full h-11 top-0 bg-red-550 z-30">
    <div class="flex justify-between my-2 mx-4 text-white">
        <div class="flex justify-center space-x-1">
            {{-- sidebar toggler --}}
            <button type="button" class="p-0.5 rounded md:hover:bg-black md:hover:bg-opacity-25" onclick="toggleSidebar()"><x-icon.bars-3 class="w-6 h-6"/></button>
            <a href="{{ route('today') }}" class="p-0.5 rounded md:hover:bg-black md:hover:bg-opacity-25" wire:navigate><x-icon.home class="w-6 h-6"/></a>
            {{-- sidebarWidth - 83px = searchWidth --}}
            <div class="flex items-center px-1 bg-white bg-opacity-25 rounded md:w-[205px]">
                <label for="search"><x-icon.search class="w-5 h-5"/></label>
                <input type="text" id="search" placeholder="Search" class="w-full py-0.5 px-2 bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-white placeholder:text-xs placeholder:-translate-y-0.5" autocomplete="off">
            </div>
        </div>
        <div class="flex justify-center space-x-3 ml-3">
            <button type="button" class="rounded-full bg-purple-800 w-7 h-7 inline-flex justify-center">{{ substr(auth()->user()->name, 0, 1) }}</button>
        </div>
    </div>
</div>
