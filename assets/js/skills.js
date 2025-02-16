document.addEventListener('DOMContentLoaded', function() {
    const hardSkillsBtn = document.getElementById('hardSkillsBtn');
    const softSkillsBtn = document.getElementById('softSkillsBtn');
    const hardSkills = document.getElementById('hardSkills');
    const softSkills = document.getElementById('softSkills');

    softSkillsBtn.addEventListener('click', function() {
        softSkillsBtn.classList.add('bg-orange-600');
        hardSkillsBtn.classList.remove('bg-orange-600');
        softSkills.classList.remove('hidden');
        hardSkills.classList.add('hidden');
    });

    hardSkillsBtn.addEventListener('click', function() {
        hardSkillsBtn.classList.add('bg-orange-600');
        softSkillsBtn.classList.remove('bg-orange-600');
        hardSkills.classList.remove('hidden');
        softSkills.classList.add('hidden');
    });
});