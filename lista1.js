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

  