export let arrayOFLabelIDs = [];

export function selectLabel(labelID) {
    if (arrayOFLabelIDs.includes(labelID)) {
        let indexOfItem = arrayOFLabelIDs.indexOf(labelID);
        arrayOFLabelIDs.splice(indexOfItem, 1);
    } else {
        arrayOFLabelIDs.push(labelID);
    }
}

export function resetArrayOfLabelIDs() {
    arrayOFLabelIDs.forEach(function (labelID) {
        document.getElementById(`label-${labelID}`).checked = false;
    });
    arrayOFLabelIDs = [];
}
