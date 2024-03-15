const express = require('express');
const fs = require('fs').promises;
const cors = require('cors'); // Importa el paquete cors

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors()); // Usa cors para habilitar CORS en tu servidor

app.post('/guardar-datos-course', async (req, res) => {
  try {
    const { title, photo, levels } = req.body;
    const newData = { title, photo, levels };

    console.log(newData)

    const currentData = await fs.readFile('courses.json', 'utf8');
    const jsonData = JSON.parse(currentData);
    jsonData.push(newData);
    await fs.writeFile('courses.json', JSON.stringify(jsonData, null, 2));
    res.sendStatus(200);
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.sendStatus(500);
  }
});

app.post('/guardar-datos-level', async (req, res) => {
    try {
      const { titleLevel } = req.body;
      const newData = { titleLevel };
  
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
