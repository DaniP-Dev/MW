
const cambiarNombre = () => {
    let nombreJson = localStorage.getItem('nombreLlve');
    if (!nombreJson) {
        nombreJson = "nombre no encontrado";
    }
    alert(nombreJson);
    console.log(nombreJson);

    const nuevoNombre = nombreJson
    if (nuevoNombre) {
        document.getElementById("nombreUsuario").innerHTML = nombreJson;
    }
};

cambiarNombre();


const mostrarUsuariosEnTabla = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    if (usuarios && Array.isArray(usuarios)) {
        const userTableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        userTableBody.innerHTML = ''; 

        usuarios.forEach(usuario => {
            const row = userTableBody.insertRow();

            const nombreCell = row.insertCell(0);
            const emailCell = row.insertCell(1);
            const telCell = row.insertCell(2);

            nombreCell.textContent = usuario.nombre;
            emailCell.textContent = usuario.email;
            telCell.textContent = usuario.tel; 
        });
    } else {
        console.log('No se encontraron usuarios en localStorage.');
    }
};

document.addEventListener('DOMContentLoaded', mostrarUsuariosEnTabla);
