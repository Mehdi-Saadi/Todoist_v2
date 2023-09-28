import './bootstrap';
// jquery
import jQuery from 'jquery';
window.$ = jQuery;

// show and hide modal script
import {showModal, hideModal} from "../assets/js/helpers/showAndHideModal.js";
window.showModal = showModal;
window.hideModal = hideModal;

// dropdown scripts
import {handleDropdowns} from "../assets/js/helpers/dropdown";
document.addEventListener('DOMContentLoaded', handleDropdowns);
document.addEventListener('livewire:navigated', handleDropdowns);

// sidebar scripts
import {getCookie} from "../assets/js/helpers/cookie";
import {closeSidebar, toggleSidebar} from '../assets/js/sidebar/toggle';
window.toggleSidebar = toggleSidebar;
window.closeSidebar = closeSidebar;

// check sidebar must be open or close based on user changes
const sidebar = document.getElementById('sidebar');
if(!getCookie('sidebar_is_close')) {
    // init data-is-close property for first time based on device width
    if(screen.width < 768) {
        sidebar.setAttribute('data-is-close', 'true');
    } else {
        sidebar.setAttribute('data-is-close', 'false');
    }
} else if (getCookie('sidebar_is_close') === 'false' && screen.width < 768) {
    closeSidebar();
}

// when user uses small device, close the sidebar after click on a button
if (screen.width < 768) {
    document.addEventListener('livewire:navigated', () => {
        setTimeout(closeSidebar, 50);
    })
}
// end sidebar scripts

// task scripts
// sort tasks for first time and after navigating.
// in '/app/today', tasks must not be sortable
import {destroyTaskSort, taskResort, taskSort} from "../assets/js/task/sort";
// roots where tasks should not be sorted on load
document.addEventListener('DOMContentLoaded', () => {
    if (! window.location.href.includes('today') && ! window.location.href.includes('filters-labels')) {
        taskSort();
    }
});

// roots where tasks should not be sorted on navigate
document.addEventListener('livewire:navigated', () => {
    setTimeout(() => {
        if (! window.location.href.includes('today') && ! window.location.href.includes('filters-labels')) {
            taskResort();
        } else {
            destroyTaskSort();
        }
    }, 50);
});
import '../assets/js/task/add';
import {deleteTask} from "../assets/js/task/delete";
window.deleteTask = deleteTask;

// task form scripts
import {showForm, hideForm} from "../assets/js/task/form/showAndHide";
window.showForm = showForm;
window.hideForm = hideForm;
import '../assets/js/task/form/disableBtn';
import {selectPriority} from "../assets/js/task/form/selectPriority";
window.selectPriority = selectPriority;

// task dropdown scripts
import {setPriority} from "../assets/js/task/dropdown/setPriority";
window.setPriority = setPriority;
import {datepickerSave} from "../assets/js/task/dropdown/datepickerSave";
window.datepickerSave = datepickerSave;
import {datepickerSelect} from "../assets/js/task/form/datepickerSelect";
window.datepickerSelect = datepickerSelect;
import {MONTH_NAMES} from "../assets/js/helpers/dayAndMonthNames";
window.MONTH_NAMES = MONTH_NAMES;

// end task scripts

// filters and labels scripts
// sort labels only when user visits its page
import {destroyLabelSort, labelResort, labelSort} from "../assets/js/filters-labels/sort.js";
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('filters-labels')) {
        labelSort();
    }
});

document.addEventListener('livewire:navigated', () => {
    setTimeout(() => {
        if (window.location.href.includes('filters-labels')) {
            labelResort();
        } else {
            destroyLabelSort();
        }
    }, 50);
});

import {toggleItems} from "../assets/js/filters-labels/toggleItems.js";
window.toggleItems = toggleItems;

// end filters and labels scripts

// must comment lines below for working livewire...
// import Alpine from 'alpinejs';
//
// window.Alpine = Alpine;
//
// Alpine.start();
