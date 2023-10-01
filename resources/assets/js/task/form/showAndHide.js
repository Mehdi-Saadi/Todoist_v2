// show new task form and hide add task button
import {selectPriority} from "./selectPriority";
import {resetArrayOfLabelIDs} from "./selectLabel.js";

export function showForm(buttonId, formId) {
    const form = document.getElementById(formId);
    const nameInput = form.querySelector('input[name="name"]');
    form.classList.remove('hidden');
    nameInput.focus();
    document.getElementById(buttonId).classList.add('hidden');
}
// hide form, show button and set inputs empty
export function hideForm(buttonId, formId) {
    const submitBtn = document.querySelector('button[data-id="submit-btn"]');
    document.getElementById(formId).classList.add('hidden');
    document.getElementById(buttonId).classList.remove('hidden');
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="description"]').value = '';
    document.dispatchEvent(new CustomEvent('reset.due.date'));
    selectPriority(4);
    resetArrayOfLabelIDs();
    submitBtn.setAttribute('disabled', 'true');
    submitBtn.setAttribute('type', 'button');
}
