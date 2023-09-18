import Swal from 'sweetalert2/dist/sweetalert2.all.min';
import {toastAlert} from "../helpers/alert";
import {ajaxRequest} from "../helpers/ajaxRequest";
import {taskResort} from "./sort";

export function deleteTask(taskId, taskName) {
    Swal.fire({
        title: "Are you sure you want to delete '" + taskName + "'?",
        icon: 'warning',
        position: 'top',
        width: 'auto',
        heightAuto: false,
        padding: '0 0 1rem',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: 'Delete',
        customClass: {
            actions: 'flex-row-reverse',
            confirmButton: 'bg-red-550 text-white hover:bg-red-850 py-1 px-3 rounded transition duration-300 ml-3',
            cancelButton: 'bg-zinc-100 hover:bg-zinc-200 py-1 px-3 rounded transition duration-300',
            icon: 'border mt-3',
            title: 'text-sm',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const task = document.getElementById(taskId);
            task.remove();
            taskResort();
            toastAlert('', 'Task removed');
            ajaxRequest('delete', '/task/destroy', taskId, function () {});
        }
    })
}
