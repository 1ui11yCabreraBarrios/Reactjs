export function validCine(values) {
    const errors = {};
    let hasError = false;
    if (values.fecha ==="") {
      errors.fecha = "Campo no puede estar vacio";
      hasError= true;
    }

    if (values.nombre ==="") {
      errors.nombre = "Campo no puede estar vacio";
      hasError= true;
    }
    if (values.apellido==="") {
      errors.apellido = "Campo no puede estar vacio";
      hasError= true;
    } 

    if (values.cui==="") {
      errors.cui = "Numero de Identificacion";
      hasError=true;
    }
    if (values.movie==="") {
      errors.movie = "Ingrese Pelicula";
      hasError=true;
    }
    if (values.horaInicio==="") {
      errors.horaInicio = "Ingrese hora";
      hasError=true;
    }
    if (values.horaFinal==="") {
      errors.horaFinal = "Ingrese hora";
      hasError=true;
    }
    return hasError ? errors : null;
  }; 
   