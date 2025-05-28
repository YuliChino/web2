function valida_envia() {
    var form = document.fvalida;

    // nombre
    if (form.nombre.value.trim().length === 0) {
        alert("TIENES QUE ESCRIBIR TU NOMBRE");
        form.nombre.focus();
        return false; 
    }

    // teléfono
    if (form.telefono.value.trim().length === 0) {
        alert("TIENES QUE ESCRIBIR TU TELÉFONO");
        form.telefono.focus();
        return false;
    }

    alert("MUCHAS GRACIAS POR ENVIAR EL FORMULARIO");
    return true;  // Permite enviar el formulario
}