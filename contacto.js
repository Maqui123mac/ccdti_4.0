document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Formulario
    event.preventDefault();

    // Limpiar los mensajes  de error 
    document.getElementById('nombreError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('phoneError').style.display = 'none';
    document.getElementById('mensajeError').style.display = 'none';

    // Validación del formulario
    var isValid = true;
    
    var name = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var email = document.getElementById('phone').value.trim();
    var message = document.getElementById('mensaje').value.trim();

    if (name === '') {
        document.getElementById('nombreError').style.display = 'block';
        isValid = false;
    }

    if (email === '' || !validateEmail(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    if (phone === '' || !validatePhone(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('mensajeError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Enviar el formulario de contacto.
        alert('Formulario enviado correctamente!');
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}