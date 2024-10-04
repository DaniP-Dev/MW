const ir_HTML = () => {
    window.location.href = '../index.html';
}

let usersData = [];
// Función para obtener datos desde una API y almacenarlos en localStorage
const obtenerDatos = async () => {
    try {
        const respuesta = await fetch('https://api.jsonbin.io/v3/b/66fdd8d5e41b4d34e43c0041');
        const datos = await respuesta.json();
        localStorage.setItem('usuarios', JSON.stringify(datos.record)); // Almacenar datos en localStorage
        console.log('Datos guardados en localStorage');
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

obtenerDatos();

const login = () => {
    const username = document.getElementById('username').value; // Obtener el usuario del input
    const password = document.getElementById('password').value; // Obtener la contraseña del input

    // Obtener los usuarios desde el localStorage
    let usersData = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar el usuario y contraseña en los datos almacenados
    const user = usersData.find(user => user.usuarioNick === username && user.clave === password);

    if (user) {
        alert(`¡Bienvenido, ${user.nombre}!`);

        // Guardar estado de sesión activa en localStorage
        localStorage.setItem('loged', 'true');
        localStorage.setItem('usuarioActual', JSON.stringify(user));  // Guardar los datos del usuario actual

        // Redirigir según el rol
        if (user.tipo === 'admin') {
            window.location.href = '../html/admin.html';
        } else {
            window.location.href = '../html/usuario.html';
        }
    } else {
        alert('Usuario o contraseña incorrectos');
    }
};



// Función para cerrar sesión
const cerrarSesion = () => {
    localStorage.removeItem('loged');  // Eliminar el estado de logeo
    localStorage.removeItem('usuarioActual');  // Eliminar los datos del usuario actual
    window.location.href = "../index.html";  // Redirigir al login
};
