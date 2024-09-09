document.getElementById('cotizacionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('Gracias, ' + nombre + '. Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.');
        this.reset(); 
    } else {
        alert('Por favor, completa todos los campos.');
    }
});