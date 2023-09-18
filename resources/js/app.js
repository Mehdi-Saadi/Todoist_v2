import './bootstrap';
// jquery
import jQuery from 'jquery';
window.$ = jQuery;

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
import {destoryTaskSort, taskResort, taskSort} from "../assets/js/task/sort";
if (! window.location.href.includes('today')) {
    document.addEventListener('DOMContentLoaded', taskSort);
}
document.addEventListener('livewire:navigated', () => {
    setTimeout(() => {
        if (! window.location.href.includes('today')) {
            taskResort();
        } else {
            destoryTaskSort();
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
import {setDate} from "../assets/js/task/dropdown/setDate";
window.setDate = setDate;
import {datepicker} from "../assets/js/task/dropdown/datepicker";
window.datepicker = datepicker;
import {MONTH_NAMES} from "../assets/js/helpers/dayAndMonthNames.js";
window.MONTH_NAMES = MONTH_NAMES;

// must comment lines below for working livewire...
// import Alpine from 'alpinejs';
//
// window.Alpine = Alpine;
//
// Alpine.start();
