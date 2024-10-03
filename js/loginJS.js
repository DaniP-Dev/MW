const ir_HTML = () => {
    window.location.href = '../index.html'
}

const verificarSesion = (tipoUsuario) => {
    const username = localStorage.getItem('username');
    const userType = localStorage.getItem('userType');
    if (!username || userType !== tipoUsuario) {
        window.location.href = '../index.html';
    }
};

const loginUser = async (JSON) => {
    JSON.preventDefault(); // Evita que el formulario se envíe automáticamente

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const BDUser = await fetch('https://api.jsonbin.io/v3/b/66fdd8d5e41b4d34e43c0041', {
            method: 'GET',
            headers: {
                'X-Master-Key': 'tuClaveAPI' // Reemplaza 'tuClaveAPI' con tu clave API de JSONBin.io
            }
        });

        const data = await BDUser.json();
        const users = data.record;

        const user = users.find(user => user.usuarioNick === username && user.clave === password);

        if (user) {
            localStorage.setItem('username', username);
            localStorage.setItem('userType', user.tipo);
            alert(`¡Bienvenido, ${user.nombre}!`);
            if (user.tipo === 'admin') {
                window.location.href = '../html/admin.html';
            } else {
                window.location.href = '../html/usuario.html';
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

const initVerificacionSesion = (tipoUsuario) => {
    document.addEventListener('DOMContentLoaded', () => {
        verificarSesion(tipoUsuario);
    });
};

document.querySelector('form').addEventListener('submit', loginUser);
