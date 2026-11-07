// About section: Professional / Personal toggle
document.addEventListener("DOMContentLoaded", function () {
    const proTab = document.getElementById("tab-professional");
    const perTab = document.getElementById("tab-personal");
    const proContent = document.getElementById("content-professional");
    const perContent = document.getElementById("content-personal");

    function show(professional) {
        proContent.style.display = professional ? "grid" : "none";
        perContent.style.display = professional ? "none" : "block";
        proTab.classList.toggle("is-active", professional);
        perTab.classList.toggle("is-active", !professional);
    }

    show(true);
    proTab.addEventListener("click", () => show(true));
    perTab.addEventListener("click", () => show(false));
});
