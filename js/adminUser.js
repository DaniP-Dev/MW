const validarSesion = () => {
    const loged = localStorage.getItem('loged');
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    if (!loged || loged === 'false') {
        alert("¡No se ha logeado!");
        window.location.href = "../html/login.html";
    } else {
        console.log(`Sesión activa para ${usuarioActual.nombre}`);
    }
};
validarSesion()
document.addEventListener('DOMContentLoaded', validarSesion);

// Función para obtener datos de la API
const obtenerDatos = async () => {
    try {
        const respuesta = await fetch('https://api.jsonbin.io/v3/b/66fdd8d5e41b4d34e43c0041');
        const datos = await respuesta.json();

        // Almacenar datos en localStorage
        localStorage.setItem('usuarios', JSON.stringify(datos.record));
        console.log('Datos guardados en localStorage');

        // Mostrar el nombre en el h1 automáticamente
        mostrarNombre(datos.record); // Llama a la función para mostrar el nombre
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

obtenerDatos();

// Función para mostrar el nombre en el h1
const mostrarNombre = (usuarios) => {
    const nombreUsuario = document.getElementById("nombreUsuario");

    // Suponiendo que el primer usuario tiene la propiedad "usuarioNick"
    const user = usuarios.find(user => user.usuarioNick); // Cambia esto según la estructura de tus datos

    if (user) {
        nombreUsuario.textContent += user.usuarioNick; // Mostrar el nombre en el h1

        // Actualizar localStorage (opcional, si deseas cambiar el nombre después)
        localStorage.setItem('usuario', JSON.stringify({ nombre: user.usuarioNick }));
    } else {
        console.error("No se encontró un usuario con usuarioNick.");
    }
};

// Llamar a la función para obtener los datos al cargar la página



