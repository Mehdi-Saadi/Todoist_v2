export function showModal(modalID) {
    const modal = document.getElementById(modalID);
    const nameInput = modal.querySelector('input[name="name"]');
    modal.classList.replace('hidden', 'flex');
    setTimeout(() => {
        modal.classList.replace('opacity-0', 'opacity-100');
        if (nameInput !== null) {
            nameInput.focus();
        }
    }, 50);
}

export function hideModal(modalID) {
    const modal = document.getElementById(modalID);
    const nameInput = modal.querySelector('input[name="name"]');
    modal.classList.replace('opacity-100', 'opacity-0');
    setTimeout(() => {
        modal.classList.replace('flex', 'hidden');
        if (nameInput !== null) {
            nameInput.value = '';
        }
    }, 50);
}
