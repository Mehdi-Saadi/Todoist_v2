import {toastAlert} from "../helpers/alert";
import {ajaxRequest} from "../helpers/ajaxRequest";
import {labelResort} from "./sort";

function showSavedLabel(label) {
    const savedLabel = document.createElement('div');
    savedLabel.setAttribute('class', 'flex items-center border rounded-lg mt-1 group');
    savedLabel.setAttribute('id', `${label.id}`);
    savedLabel.innerHTML +=
        `<svg class="w-6 h-6 cursor-move md:invisible group-hover:visible"><path fill="currentColor" d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z"></path></svg>
        <a href="/app/label/${label.id}" class="flex grow items-center py-2" wire:navigate>
            <svg class="w-6 h-6 mr-1" style="color: ${label.color}" viewBox="0 0 24 24"><path fill="currentColor" d="m5.914 11.086 4.5-4.5A2 2 0 0 1 11.828 6H16a2 2 0 0 1 2 2v4.172a2 2 0 0 1-.586 1.414l-4.5 4.5a2 2 0 0 1-2.828 0l-4.172-4.172a2 2 0 0 1 0-2.828zM14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
            <span class="text-gray-800">${label.name}</span>
        </a>

        <div class="hidden md:flex invisible md:group-hover:visible py-2 pr-3">
            <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1" title="Add to favorites"><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.5 8.75C3.5 13 7 16 12 20c5-4 8.5-7 8.5-11.25A4.75 4.75 0 0 0 15.75 4c-1.333 0-2.583.667-3.75 2-1.167-1.333-2.417-2-3.75-2A4.75 4.75 0 0 0 3.5 8.75ZM15.75 5a3.75 3.75 0 0 1 3.75 3.75c0 3.13-1.753 5.32-7.5 9.967-5.747-4.648-7.5-6.837-7.5-9.967A3.75 3.75 0 0 1 8.25 5c1.019 0 2.008.528 2.997 1.659l.753.86.753-.86C13.743 5.527 14.73 5 15.75 5Z" clip-rule="evenodd"></path></svg></button>
            <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1" title="Edit label"><svg class="w-5 h-5" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path><path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"></path></g></svg></button>
            <button type="button" class="hover:bg-zinc-100 rounded transition duration-300 flex items-center p-1" title="Delete label" onclick="deleteLabel(${label.id}, '${label.name}')"><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><rect width="14" height="1" x="5" y="6" fill="currentColor" rx="0.5"></rect><path fill="currentColor" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"></path><path stroke="currentColor" d="M17.5 6.5h-11V18A1.5 1.5 0 008 19.5h8a1.5 1.5 0 001.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0014 3.5h-4A1.5 1.5 0 008.5 5v1.5z"></path></g></svg></button>
        </div>`;
    document.getElementById('labels-root').appendChild(savedLabel);
}

function addLabel() {
    document.getElementById('new-label-form').addEventListener('submit', (e) => {
        e.preventDefault();
        let target = e.target;
        const colorInput = target.querySelector('input[name="color"]');
        const nameInput = target.querySelector('input[name="name"]');
        // check that inputs must not empty
        if (nameInput.value === '') {
            return;
        }

        if (nameInput.value.length > 60) {
            toastAlert('error', 'Name must not be grater than 60 characters');
            return;
        }

        let data = {
            color: colorInput.value,
            name: nameInput.value,
        };

        ajaxRequest('post', "/label/create", data, function (label) {

            showSavedLabel(label);

            labelResort();

            toastAlert('', 'Label created');
        }, function (message) {
            toastAlert('error', `${message.responseJSON.message}`);
        });

        hideAndResetLabelForm();
    });
}
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('filters-labels')) {
        addLabel();
    }
});
document.addEventListener('livewire:navigated', () => {
    setTimeout(() => {
        if (window.location.href.includes('filters-labels')) {
            addLabel();
        }
    }, 50);
});
