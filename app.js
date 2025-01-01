//  1.  - Crea un archivo llamado `app.js` donde irá tu código.

/*
2. Creación del Servidor:
  - Configura un servidor Express.
  - Crea rutas para la página principal (/) y diferentes especialidades como marketing (/marketing), developers (/developers), etc...
  - Implementa el manejo de errores 404 para rutas no definidas.
  - Las rutas serán las mismas de las `specialty` (abajo hay un objeto con datos que usarás para crear lo qiue pide el ejercicio) 
*/
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    '<h1>Hola soy la home</h1><h3><a href="/marketing">Marketing</a></h3><h3><a href="/developers">Developers</a></h3><h3><a href="/qas">Qas</a></h3><h3><a href="/ventas">Ventas</a></h3>'
  );
});

/*
3. Filtrado de Usuarios por Especialidad:
  - Crea una función para filtrar usuarios por su especialidad.
*/
const usersData = [
  { id: 1, name: "Alice", age: 28, specialty: "marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "developers" },
  { id: 3, name: "Charlie", age: 30, specialty: "developers" },
  { id: 4, name: "David", age: 25, specialty: "QAs" },
  { id: 5, name: "Emma", age: 32, specialty: "ventas" },
  { id: 6, name: "Frank", age: 28, specialty: "marketing" },
  { id: 7, name: "Grace", age: 34, specialty: "developers" },
  { id: 8, name: "Hank", age: 27, specialty: "QAs" },
  { id: 9, name: "Ivy", age: 31, specialty: "ventas" },
  { id: 10, name: "Jack", age: 29, specialty: "marketing" },
  { id: 11, name: "Karen", age: 36, specialty: "developers" },
  { id: 12, name: "Leo", age: 26, specialty: "QAs" },
  { id: 13, name: "Mia", age: 33, specialty: "ventas" },
  { id: 14, name: "Nathan", age: 30, specialty: "marketing" },
  { id: 15, name: "Olivia", age: 37, specialty: "developers" },
  { id: 16, name: "Paul", age: 24, specialty: "QAs" },
  { id: 17, name: "Quinn", age: 32, specialty: "ventas" },
  { id: 18, name: "Ryan", age: 28, specialty: "marketing" },
  { id: 19, name: "Sara", age: 35, specialty: "developers" },
  { id: 20, name: "Tom", age: 29, specialty: "QAs" },
  { id: 21, name: "Uma", age: 30, specialty: "ventas" },
  { id: 22, name: "Victor", age: 27, specialty: "marketing" },
  { id: 23, name: "Wendy", age: 34, specialty: "developers" },
  { id: 24, name: "Xander", age: 31, specialty: "QAs" },
  { id: 25, name: "Yara", age: 33, specialty: "ventas" },
  { id: 26, name: "Zack", age: 28, specialty: "marketing" },
  { id: 27, name: "Ava", age: 36, specialty: "developers" },
  { id: 28, name: "Bryan", age: 26, specialty: "QAs" },
  { id: 29, name: "Cynthia", age: 32, specialty: "ventas" },
  { id: 30, name: "Derek", age: 30, specialty: "marketing" },
];

const groupedUsers = {
  marketing: [],
  developers: [],
  QAs: [],
  ventas: [],
};

usersData.forEach((user) => {
  if (groupedUsers[user.specialty]) {
    groupedUsers[user.specialty].push(user);
  }
});

/*
4. Generación de Páginas HTML:
  - Utiliza literal string para construir páginas HTML directamente en el código..
  - Crea una página para cada especialidad que muestre el título de la página, el número de personas y los detalles de cada usuario.
*/
const generateHTML = (title, users) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body>
  <h1>${title}</h1>
  <p>Total: ${users.length} users</p>
  <ul>
    ${users
      .map((user) => `<li>${user.name} (${user.age} years old)</li>`)
      .join("")}
  </ul>
  <a href="/">Go to Home</a>
</body>
</html>
`;

app.get("/marketing", (req, res) => {
  res.send(generateHTML("Marketing", groupedUsers.marketing));
});

app.get("/developers", (req, res) => {
  res.send(generateHTML("Developers", groupedUsers.developers));
});

app.get("/QAs", (req, res) => {
  res.send(generateHTML("QAs", groupedUsers.QAs));
});

app.get("/ventas", (req, res) => {
  res.send(generateHTML("Ventas", groupedUsers.ventas));
});
app.use((req, res) => {
  res.status(404).send(`
      <h1>Pagina no encontrada </h1>
      <a href="/">Pagina Home</a>
    `);
});

app.listen(3000, () => {
  console.log("Node.js is listening on port 3000");
});
/*
5. Prueba de la Aplicación:
  - Abre tu navegador y visita las diferentes rutas, por ejemplo:
http://localhost:3000/marketing
http://localhost:3000/developers

  - Intenta acceder a una ruta no definida para verificar el manejo de errores 404.
  - En la ruta "/" puedes crear una navegación que vaya a cada una de las páginas y en cada página puedes repetir esa navegación o solo un volver a home "/".
*/
