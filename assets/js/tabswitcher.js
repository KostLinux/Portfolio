// About section
document.addEventListener('DOMContentLoaded', function() {
    const tabProfessional = document.getElementById('tab-professional');
    const tabPersonal = document.getElementById('tab-personal');
    const contentProfessional = document.getElementById('content-professional');
    const contentPersonal = document.getElementById('content-personal');

    // Set initial state
    contentProfessional.classList.remove('hidden');
    contentPersonal.classList.add('hidden');
    tabProfessional.classList.add('bg-orange-600');
    tabPersonal.classList.remove('bg-orange-600');

    function switchTabs(showProfessional) {
        if (showProfessional) {
            contentProfessional.classList.remove('hidden');
            contentPersonal.classList.add('hidden');
            tabProfessional.classList.add('bg-orange-600');
            tabPersonal.classList.remove('bg-orange-600');
        } else {
            contentProfessional.classList.add('hidden');
            contentPersonal.classList.remove('hidden');
            tabProfessional.classList.remove('bg-orange-600');
            tabPersonal.classList.add('bg-orange-600');
        }
    }

    tabProfessional.addEventListener('click', () => switchTabs(true));
    tabPersonal.addEventListener('click', () => switchTabs(false));
});

// Expertise section
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('[data-tab]');
    // Change the selector to be more specific
    const contents = document.querySelectorAll('#whatido [id^="content-"]');

    function switchTab(tabId) {
        contents.forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(`content-${tabId}`).classList.remove('hidden');
        
        tabs.forEach(tab => {
            tab.classList.remove('bg-orange-600');
        });
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('bg-orange-600');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });
});