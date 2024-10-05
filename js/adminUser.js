
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
