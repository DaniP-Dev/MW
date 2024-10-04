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
document.addEventListener('DOMContentLoaded', validarSesion);

const obtenerDatos = async () => {
    try {
        const respuesta = await fetch('https://api.jsonbin.io/v3/b/66fdd8d5e41b4d34e43c0041');
        const datos = await respuesta.json();

        localStorage.setItem('usuarios', JSON.stringify(datos.record));
        console.log('Datos guardados en localStorage');

        mostrarNombre(datos.record); 
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

const mostrarNombre = (usuarios) => {
    const nombreUsuario = document.getElementById("nombreUsuario");
    const user = usuarios.find(user => user.usuarioNick); 
    if (user) {
        nombreUsuario.textContent += user.usuarioNick; 
        localStorage.setItem('usuario', JSON.stringify({ nombre: user.usuarioNick }));
    } else {
        console.error("No se encontró un usuario con usuarioNick.");
    }
};

obtenerDatos();




