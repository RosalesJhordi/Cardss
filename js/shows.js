document.addEventListener("DOMContentLoaded", function() {
    const show = document.getElementById("btn-inicio");
    const main = document.getElementById("inicio");
    const show2 = document.getElementById("btn-entradas");
    const main2 = document.getElementById("entradas");
    const show3 = document.getElementById("btn-principales");
    const main3 = document.getElementById("principales");
    const show4 = document.getElementById("btn-postres");
    const main4 = document.getElementById("postres");
    const show5 = document.getElementById("btn-bebidas");
    const main5 = document.getElementById("bebidas");

    show.addEventListener("click", function() {
        main.style.display = 'block';
        main2.style.display = 'none';
        main3.style.display = 'none';
        main4.style.display = 'none';
        main5.style.display = 'none';
    });

    show2.addEventListener("click", function() {
        main.style.display = 'none';
        main3.style.display = 'none';
        main4.style.display = 'none';
        main5.style.display = 'none';
        main2.style.display = 'block';
    });
    show3.addEventListener("click", function() {
        main.style.display = 'none';
        main2.style.display = 'none';
        main4.style.display = 'none';
        main5.style.display = 'none';
        main3.style.display = 'block';
    });
    show4.addEventListener("click", function() {
        main.style.display = 'none';
        main2.style.display = 'none';
        main3.style.display = 'none';
        main5.style.display = 'none';
        main4.style.display = 'block';
    });

    show5.addEventListener("click", function() {
        main.style.display = 'none';
        main2.style.display = 'none';
        main3.style.display = 'none';
        main4.style.display = 'none';
        main5.style.display = 'block';
    });
});
