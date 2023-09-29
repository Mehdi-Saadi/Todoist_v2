export function selectColor(color, name, buttonDataToggle, colorInputID) {
    const colorBtn = document.querySelector(`button[data-dropdown-toggle="${buttonDataToggle}"]`);
    const colorInput = document.getElementById(colorInputID);
    colorBtn.innerHTML = `<svg class="w-4 h-4 mr-2" style="color: ${color}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor"></path></svg>${name}`;
    colorInput.value = `${color}`;
}