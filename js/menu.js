document.addEventListener("DOMContentLoaded", function() {
    const open = document.getElementById("btn-menu");
    const close = document.getElementById("btn-menuClose");
    const div = document.getElementById("menu");

    open.addEventListener("click", function() {
        div.style.transform = 'translateX(0px)';
    });

    close.addEventListener("click", function() {
        div.style.transform = 'translateX(-900px)';
    });
});
