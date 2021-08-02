export function validCine(values) {
    const error = {};
    let hasError = false;
    if (values.nombre === "") {
      error.nombre = "El campo no puede ser vacío";
      hasError = true;
    }
    if (values.apellido === "") {
      error.apellido = "El campo no puede ser vacío";
      hasError = true;
    }
   
    return hasError ? error : null;
  }