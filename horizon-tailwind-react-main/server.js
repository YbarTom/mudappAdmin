const express = require('express');
const fs = require('fs').promises;
const cors = require('cors'); // Importa el paquete cors

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors()); // Usa cors para habilitar CORS en tu servidor

app.post('/guardar-datos-course', async (req, res) => {
  try {
    const { title, photo } = req.body;

    // Leer los datos actuales del archivo JSON
    const currentData = await fs.readFile('courses.json', 'utf8');
    const jsonData = JSON.parse(currentData);

    // Calcular el nuevo ID
    let id;
    if (jsonData.length > 0) {
      // Si hay cursos existentes, el nuevo ID es el ID del último curso + 1
      const lastCourse = jsonData[jsonData.length - 1];
      id = lastCourse.id + 1;
    } else {
      // Si no hay cursos existentes, el ID del nuevo curso es 1
      id = 1;
    }

    // Crear el nuevo objeto de curso con el ID generado
    const levels = [];
    const newData = { id, title, photo, levels };

    console.log(newData);

    // Agregar el nuevo curso al array de cursos
    jsonData.push(newData);

    // Escribir los datos actualizados en el archivo JSON
    await fs.writeFile('courses.json', JSON.stringify(jsonData, null, 2));

    // Enviar el ID generado como parte de la respuesta al cliente
    res.status(200).json({ id });

  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.sendStatus(500);
  }
});

app.post('/guardar-datos-level', async (req, res) => {
    try {
      const { title } = req.body;
      const newData = { title };
  
      console.log(newData)
  
      const currentData = await fs.readFile('levels.json', 'utf8');
      const jsonData = JSON.parse(currentData);
      jsonData.push(newData);
      await fs.writeFile('levels.json', JSON.stringify(jsonData, null, 2));
      res.sendStatus(200);
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      res.sendStatus(500);
    }
  });

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
