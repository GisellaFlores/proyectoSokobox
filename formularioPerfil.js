document.addEventListener('DOMContentLoaded', function () {
  const registroForm = document.getElementById('registroForm');

  registroForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //datitos del formulario del perfil
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('emailRegistro').value;
    const contrasena = document.getElementById('contrasenaRegistro').value;

    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Contraseña:', contrasena);

    alert('¡Tu registro ha sido exitoso!');

    registroForm.reset();
  });
});
