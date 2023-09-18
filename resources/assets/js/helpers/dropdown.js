// NOTE: all dropdown buttons MUST contain 'data-dropdown-toggle' property, and its value MUST equal to 'id' property in dropdown menus
export function handleDropdowns() {
    // Toggle dropdown elements using [data-dropdown-toggle]
    document.querySelectorAll('[data-dropdown-toggle]').forEach(function (dropdownToggleEl) {
        const dropdownMenuId = dropdownToggleEl.getAttribute('data-dropdown-toggle');
        const dropdownMenuEl = document.getElementById(dropdownMenuId); // options

        dropdownToggleEl.addEventListener('click', () => {
            const buttonsInDropdown = dropdownMenuEl.querySelectorAll('button');

            dropdownMenuEl.classList.replace('hidden', 'block');

            // when click on dropdownToggleEl, its parents must not contain invisible class
            let parentEl = dropdownToggleEl.parentElement;
            for(let i = 0; i < 2; i++) {
                if(parentEl.classList.contains('invisible')) {
                    parentEl.classList.replace('invisible', 'visible');
                } else {
                    parentEl = parentEl.parentElement;
                }
            }

            // close dropdown if user clicked outside of it, or clicked on a button in dropdown
            function handleDropdownOutsideClick(event) {
                let targetElement = event.target; // clicked element

                if (dropdownMenuEl.contains(targetElement)) {
                    // hide when clicking any button inside dropdown menu
                    for (const buttonInDropdown of buttonsInDropdown) {
                        if (buttonInDropdown.contains(targetElement)) {

                            closeDropdown();
                            break;

                        }
                    }
                } else {
                    // hide when clicking outside the dropdown menu
                    closeDropdown();
                }
            }

            function closeDropdown() {
                dropdownMenuEl.classList.replace('block', 'hidden');

                // back to pervious state (if parent contains 'visible', change it to 'invisible')
                let parentEl = dropdownToggleEl.parentElement;
                for(let i = 0; i < 2; i++) {
                    if(parentEl.classList.contains('visible')) {
                        parentEl.classList.replace('visible', 'invisible');
                    } else {
                        parentEl = parentEl.parentElement;
                    }
                }

                document.removeEventListener('click', handleDropdownOutsideClick, true);
            }

            document.addEventListener('click', handleDropdownOutsideClick, true);
        });
    });
}
