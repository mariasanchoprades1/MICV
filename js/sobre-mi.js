$(document).ready(function() {
    let parrafoActivo = 0; // Iniciar con el primer párrafo visible

    // Ocultar todos los párrafos excepto el primero al inicio
    $(".parrafo-activo").hide();
    $(".parrafo-activo").eq(parrafoActivo).show();

    $("#siguiente-sobre-mi").click(function() {
        $(".parrafo-activo").eq(parrafoActivo).hide(); // Ocultar el párrafo actual
        parrafoActivo = (parrafoActivo + 1) % $(".parrafo-activo").length; // Obtener el siguiente índice
        $(".parrafo-activo").eq(parrafoActivo).show(); // Mostrar el siguiente párrafo
    });

    $("#anterior-sobre-mi").click(function() {
        $(".parrafo-activo").eq(parrafoActivo).hide(); // Ocultar el párrafo actual
        parrafoActivo = (parrafoActivo - 1 + $(".parrafo-activo").length) % $(".parrafo-activo").length; // Obtener el índice anterior
        $(".parrafo-activo").eq(parrafoActivo).show(); // Mostrar el párrafo anterior
    });
});
