import {setCookie} from "../helpers/cookie";
const chevron_below = `<svg class="w-5 h-5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m16 10-4 4-4-4"></path></svg>`;
const chevron_right = `<svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 24V0h24v24z"></path><path fill="currentColor" fill-rule="nonzero" d="M13.293 12L9.646 8.354a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 12z"></path></g></svg>`;

export function openItems(toggleBtn, menuID) {
    const menu = document.getElementById(menuID);

    toggleBtn.innerHTML = chevron_below;
    menu.setAttribute('data-is-close', 'false');
    menu.classList.remove('hidden');

    setCookie(`${menuID}_is_close`, 'false');
}

export function closeItems(toggleBtn, menuID) {
    const menu = document.getElementById(menuID);

    toggleBtn.innerHTML = chevron_right;
    menu.setAttribute('data-is-close', 'true');
    menu.classList.add('hidden');

    setCookie(`${menuID}_is_close`, 'true');
}

export function toggleItems(toggleBtn, menuID) {
    document.getElementById(menuID).getAttribute('data-is-close') === 'true' ? openItems(toggleBtn, menuID) : closeItems(toggleBtn, menuID);
}
