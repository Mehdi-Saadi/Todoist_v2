import {ajaxRequest} from "../../helpers/ajaxRequest";

export function setPriority(priority, taskId, selectedBtn) {
    const taskCircle = document.getElementById(`task-circle-${taskId}`);
    let data = {
        id: taskId
    };
    const priorityBtns = selectedBtn.parentElement.querySelectorAll('button');

    // remove rings from all priority btns
    priorityBtns.forEach(function (priorityBtn) {
        priorityBtn.classList.remove('ring-1');
        priorityBtn.classList.remove('ring-gray-200');
    });
    // add ring for selected btn
    selectedBtn.classList.add('ring-1');
    selectedBtn.classList.add('ring-gray-200');

    switch (priority) {
        case 1:
            taskCircle.style.color = '#db4035';
            data.color = '#db4035';
            break;
        case 2:
            taskCircle.style.color = '#ff9933';
            data.color = '#ff9933';
            break;
        case 3:
            taskCircle.style.color = '#4073ff';
            data.color = '#4073ff';
            break;
        case 4:
            taskCircle.style.color = '#808080';
            data.color = '#808080';
    }
    ajaxRequest('put', '/task/update/color', data, function () {});
}
