let contactList = [
    { name: "Jesus valencia", phone: " 3213057287", email: "dv357549@gmail.com" },
    { name: "Jane Diaz", phone: " 3213026743", email: "jane.1@gmail.com" },
    { name: "johana ramirez", phone: "3024567213", email: "johna23@gmail.com.com" }
  ];
  
  function addContact(name, phone, email) {     // Función para añadir un nuevo contacto a la lista
    contactList.push({ name, phone, email });
  }
  
  function deleteContact(name) {       // Función para borrar un contacto existente de la lista
    contactList = contactList.filter(contact => contact.name !== name);
  }
  
  function printContacts() {    // Función para imprimir los contactos presentes en la lista
    console.log("Contact List:");
    contactList.forEach(contact => console.log(contact.name, contact.phone, contact.email));
  }

  proyect 2

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

  "review funcion que permite actualizarContacto"
}


function actualizarContacto(id, nuevosDatos) {    // Función para actualizar un contacto por su id
    const index = contactos.findIndex(contacto => contacto.id === id);  // Encontrar el índice del contacto al actualizar
  
    if (index === -1) {  // Si el contacto no existe, retornar false
      return false;
    }
  
    contactos[index] = { ...contactos[index], ...nuevosDatos };   // Actualizar los datos del contacto
  
    return contactos[index]; // Retornar el objeto del contacto actualizado
  }

