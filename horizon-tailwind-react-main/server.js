const express = require('express');
const fs = require('fs').promises;
const cors = require('cors'); // Importa el paquete cors

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors()); // Usa cors para habilitar CORS en tu servidor

app.post('/guardar-datos', async (req, res) => {
  try {
    const { nombre, apellido, email } = req.body;
    const newData = { nombre, apellido, email };

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

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
