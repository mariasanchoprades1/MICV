document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".contacto-slide");
    const anteriorBtn = document.getElementById("anterior-contacto");
    const siguienteBtn = document.getElementById("siguiente-contacto");

    let indiceActual = 0;

    function mostrarSlide(indice) {
        slides.forEach((slide, index) => {
            if (index === indice) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function siguienteSlide() {
        indiceActual++;
        if (indiceActual >= slides.length) {
            indiceActual = 0;
        }
        mostrarSlide(indiceActual);
    }

    function anteriorSlide() {
        indiceActual--;
        if (indiceActual < 0) {
            indiceActual = slides.length - 1;
        }
        mostrarSlide(indiceActual);
    }

    mostrarSlide(indiceActual);

    siguienteBtn.addEventListener("click", siguienteSlide);
    anteriorBtn.addEventListener("click", anteriorSlide);
});
