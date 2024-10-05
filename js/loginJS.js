const ir_HTML = () => {
    window.location.href = '../index.html';
}

const mostrarClave = () => {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

let usersData = [];
const obtenerDatos = async () => {
    try {
        const respuesta = await fetch('https://api.jsonbin.io/v3/b/66fdd8d5e41b4d34e43c0041');
        const datos = await respuesta.json();
        localStorage.setItem('usuarios', JSON.stringify(datos.record));
        console.log('Datos guardados en localStorage');
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

obtenerDatos();

const login = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let usersData = JSON.parse(localStorage.getItem('usuarios')) || [];

    const user = usersData.find(user => user.usuarioNick === username && user.clave === password);

    if (user) {
        alert(`¡Bienvenido, ${user.nombre}!`);

        localStorage.setItem('loged', 'true');
        localStorage.setItem('nombreLlve', JSON.stringify(user.nombre));

        if (user.tipo === 'admin') {
            window.location.href = '../html/admin.html';
        } else {
            window.location.href = '../html/usuario.html';
        }
    } else {
        alert('Usuario o contraseña incorrectos');
    }
};


const cerrarSesion = () => {
    localStorage.removeItem('loged');
    localStorage.removeItem('usuarioActual');
    window.location.href = "../index.html";
};