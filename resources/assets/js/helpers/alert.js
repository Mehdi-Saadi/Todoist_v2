import Swal from 'sweetalert2/dist/sweetalert2.all.min';

export function toastAlert(icon, title) {
    const Toast = Swal.mixin({
        toast: true,
        color: '#f8f9fa',
        background: '#282828',
        width: 'auto',
        padding: '.3rem',
        position: 'bottom-start',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 4000,
        customClass: {
            timerProgressBar: 'bg-red-550',
        }
    });

    Toast.fire({
        icon: icon,
        title: title,
    });
}
