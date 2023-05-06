const contactos = []; // Array para almacenar los contactos
function crearContacto(id, nombres, apellidos, telefono, ubicaciones,ciudad,direccion) {

  const contacto = {       // Crear un objeto con la información del contacto
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: ubicaciones
    ciudad:
    direccion: 
  };
  contactos.push(contacto);  // Agregar el objeto al array de contactos
  return contacto;  // Retornar el objeto del contacto creado
}
function eliminarContacto(id) {    // Función para eliminar un contacto por su id
  const index = contactos.findIndex(contacto => contacto.id === id); // Encontrar el índice del contacto a eliminar

  if (index === -1) {   // Si el contacto no existe, retornar false
    return false;
  }
  contactos.splice(index, 1);  // Eliminar el objeto del array de contactos y retornar true
  return true;
}


function actualizarContacto(id, nuevosDatos) {    // Función para actualizar un contacto por su id
    const index = contactos.findIndex(contacto => contacto.id === id);  // Encontrar el índice del contacto al actualizar
  
    if (index === -1) {  // Si el contacto no existe, retornar false
      return false;
    }
  
    contactos[index] = { ...contactos[index], ...nuevosDatos };   // Actualizar los datos del contacto
  
    return contactos[index]; // Retornar el objeto del contacto actualizado
  }