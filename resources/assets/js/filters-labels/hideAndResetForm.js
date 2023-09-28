export function hideAndResetLabelForm() {
    const submitBtn = document.getElementById('new-label-modal').querySelector('button[data-id="submit-btn"]');
    hideModal('new-label-modal');
    setTimeout(() => {
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.setAttribute('type', 'button');
        selectColor('#808080', 'Charcoal', 'new-label-form-all-labels', 'new-label-form-color');
    }, 50);
}
