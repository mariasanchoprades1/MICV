$(document).ready(function() {
    let abrirVentanas = true; // Estado inicial ON
    
    // Función para actualizar el estado del interruptor
    function actualizarInterruptor() {
        $("#interruptor").toggleClass("encendido", abrirVentanas);
    }
    
    // Inicializar el estado del interruptor
    actualizarInterruptor();

    // Agregar evento al interruptor para alternar el estado
    $("#interruptor").click(function() {
        abrirVentanas = !abrirVentanas;
        actualizarInterruptor();
    });

    // Agregar evento a los enlaces
    $("#proyectos a").mouseover(function(event) {
        if (!abrirVentanas) {
            event.preventDefault();
        } else {
            // Abre el enlace en una nueva ventana
            const ventanaEmergente = window.open(this.href, "ProyectoWindow", "width=800,height=600");
            if (ventanaEmergente) {
                ventanaEmergente.focus();
            }
        }
    });
});