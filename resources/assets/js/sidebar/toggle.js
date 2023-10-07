import {setCookie} from "../helpers/cookie";

export function openSidebar() {
    const sidebar = document.getElementById('sidebar'),
        mainContent = document.getElementById('main'),
        overlay = document.getElementById('overlay');

    sidebar.classList.replace('-translate-x-full', 'translate-x-0');
    sidebar.classList.add('md:translate-x-0');
    sidebar.setAttribute('data-is-close', 'false');

    mainContent.classList.add('md:pl-[288px]');

    // overlay effect if screen size is less than md
    if (screen.width < 	768) {
        document.body.classList.add('overflow-hidden');
        overlay.classList.remove('hidden');
    }
    setCookie('sidebar_is_close', 'false');
}

export function closeSidebar() {
    const sidebar = document.getElementById('sidebar'),
        mainContent = document.getElementById('main'),
        overlay = document.getElementById('overlay');

    sidebar.classList.replace('translate-x-0', '-translate-x-full');
    sidebar.classList.remove('md:translate-x-0');
    sidebar.setAttribute('data-is-close', 'true');

    mainContent.classList.remove('md:pl-[288px]');

    // overlay effect if screen size is less than md
    if (screen.width < 	768) {
        document.body.classList.remove('overflow-hidden');
        overlay.classList.add('hidden');
    }
    setCookie('sidebar_is_close', 'true');
}

export function toggleSidebar() {
    document.getElementById('sidebar').getAttribute('data-is-close') === 'true' ? openSidebar() : closeSidebar();
}
