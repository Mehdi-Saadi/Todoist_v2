export function selectPriority(priority) {
    const priorityBtn = document.querySelector('button[data-dropdown-toggle="new-task-form-priority"]');
    const colorInput = document.getElementById('new-task-form-color');
    switch (priority) {
        case 1:
            colorInput.value = '#db4035';
            priorityBtn.innerHTML = `<svg class="w-5 h-5 w-5 h-5 mr-1" style="color: #db4035;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-name="priority-icon" data-priority="1"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z" fill="currentColor"></path></svg>P1`;
            break;
        case 2:
            colorInput.value = '#ff9933';
            priorityBtn.innerHTML = `<svg class="w-5 h-5 w-5 h-5 mr-1" style="color: #ff9933;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-name="priority-icon" data-priority="1"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z" fill="currentColor"></path></svg>P2`;
            break;
        case 3:
            colorInput.value = '#4073ff';
            priorityBtn.innerHTML = `<svg class="w-5 h-5 w-5 h-5 mr-1" style="color: #4073ff;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-name="priority-icon" data-priority="1"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z" fill="currentColor"></path></svg>P3`;
            break;
        case 4:
            colorInput.value = '#808080';
            priorityBtn.innerHTML = `<svg class="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-name="priority-icon" data-priority="4"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5a.5.5 0 01.223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.822 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0120 4.5V13a.5.5 0 01-.223.416c-1.09.727-2.518 1.084-4.277 1.084-1.113 0-1.92-.197-3.658-.776C10.204 13.178 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777V19.5a.5.5 0 01-1 0V5zm4.5 7c-1.367 0-2.535.216-3.5.654V5.277c.886-.515 2.05-.777 3.5-.777.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.367 0 2.535-.216 3.5-.654v7.377c-.886.515-2.05.777-3.5.777-.97 0-1.704-.178-3.342-.724C10.421 12.196 9.613 12 8.5 12z" fill="currentColor"></path></svg>Priority`;
    }
}
