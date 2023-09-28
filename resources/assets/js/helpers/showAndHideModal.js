export function showModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.replace('hidden', 'flex');
    setTimeout(() => {
        modal.classList.replace('opacity-0', 'opacity-100');
    }, 50);
}

export function hideModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.replace('opacity-100', 'opacity-0');
    setTimeout(() => {
        modal.classList.replace('flex', 'hidden');
    }, 50);
}
