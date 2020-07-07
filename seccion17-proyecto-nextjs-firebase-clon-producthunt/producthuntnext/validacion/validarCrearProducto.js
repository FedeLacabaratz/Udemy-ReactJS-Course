export default function validarCrearProducto(valores) {

    let errores = {};

    // Validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = 'El Nombre es obligatorio';
    };

    // Validar la empresa
    if(!valores.empresa) {
        errores.empresa = 'El Nombre de la Empresa es obligatorio';
    };

    // Validar el email
    if(!valores.url) {
        errores.url = 'La URL del producto es obligatoria';
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = 'El formato de la URL no es válido';
    };
    
    // Validar la descripción
    if(!valores.descripcion) {
        errores.descripcion = 'Agrega una descripción de tu producto';
    };
    
    return errores;
}
