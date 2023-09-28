export function closeAndResetLabelForm() {
    hideModal('new-label-modal');
    setTimeout(() => {
        selectColor('#808080', 'Charcoal', 'new-label-form-all-labels', 'new-label-form-color');
    }, 300);
}
