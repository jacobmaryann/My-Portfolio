
const skillTabs = document.querySelectorAll('[data-skill-tab]');
const skillPanels = document.querySelectorAll('[data-skill-panel]');

skillTabs.forEach((tab) => {
    tab.addEventListener('click', () => {

        const selectedCategory = tab.dataset.skillTab;

        // Update active button
        skillTabs.forEach((button) => {
            const isActive = button === tab;

            button.classList.toggle('active', isActive);
            button.setAttribute('aria-selected', isActive);
        });

        // Display the selected skills
        skillPanels.forEach((panel) => {
            const isSelected =
                panel.dataset.skillPanel === selectedCategory;

            panel.hidden = !isSelected;
            panel.classList.toggle('active', isSelected);
        });

    });
});
