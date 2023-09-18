function disableBtn() {
    const nameInput = document.querySelector('input[name="name"]');
    const submitBtn = document.querySelector('button[data-id="submit-btn"]');
    nameInput.addEventListener('keyup', () => {
        if(nameInput.value === '') {
            submitBtn.setAttribute('disabled', 'true');
            submitBtn.setAttribute('type', 'button');
        } else {
            submitBtn.removeAttribute('disabled');
            submitBtn.setAttribute('type', 'submit');
        }
    });
}
document.addEventListener('DOMContentLoaded', disableBtn);
document.addEventListener('livewire:navigated', disableBtn);
