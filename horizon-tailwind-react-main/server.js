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
    const { title, idCourse, part } = req.body;

    // Leer los datos actuales del archivo JSON de cursos
    const coursesData = await fs.readFile('courses.json', 'utf8');
    const courses = JSON.parse(coursesData);

    // Buscar el curso correspondiente al idCourse
    const course = courses.find(course => course.id === idCourse);
    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    // Calcular el nuevo ID para el nivel
    const levelsData = await fs.readFile('levels.json', 'utf8');
    const levels = JSON.parse(levelsData);
    let id;
    if (levels.length > 0) {
      const lastLevel = levels[levels.length - 1];
      id = lastLevel.id + 1;
    } else {
      id = 1;
    }

    // Crear el nuevo objeto de nivel
    var lessons = []
    var status = 0
    const newLevel = { id, idCourse, part, title, status, lessons };

    // Agregar el nuevo nivel al array de niveles del curso encontrado
    course.levels.push(id);

    // Escribir los datos actualizados de los cursos
    await fs.writeFile('courses.json', JSON.stringify(courses, null, 2));

    // Escribir los datos del nuevo nivel
    await fs.writeFile('levels.json', JSON.stringify([...levels, newLevel], null, 2));

    res.status(200).json({ id });

  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.sendStatus(500);
  }
});

app.post('/guardar-datos-lesson', async (req, res) => {
  try {
    const { title, idLevel } = req.body;

    // Leer los datos actuales del archivo JSON de cursos
    const levelsData = await fs.readFile('levels.json', 'utf8');
    const levels = JSON.parse(levelsData);

    // Buscar el curso correspondiente al idCourse
    const level = levels.find(level => level.id === idLevel);
    if (!level) {
      return res.status(404).json({ error: 'Level no encontrado' });
    }

    // Calcular el nuevo ID para el nivel
    const lessonsData = await fs.readFile('lessons.json', 'utf8');
    const lessons = JSON.parse(lessonsData);
    let id;
    if (lessons.length > 0) {
      const lastlesson = lessons[lessons.length - 1];
      id = lastlesson.id + 1;
    } else {
      id = 1;
    }

    // Crear el nuevo objeto de nivel
    var flashcards = []
    var status = 0
    const newLesson = { id, idLevel, title, status, flashcards };

    // Agregar el nuevo nivel al array de niveles del curso encontrado
    level.lessons.push(id);

    // Escribir los datos actualizados de los cursos
    await fs.writeFile('levels.json', JSON.stringify(levels, null, 2));

    // Escribir los datos del nuevo nivel
    await fs.writeFile('lessons.json', JSON.stringify([...lessons, newLesson], null, 2));

    res.status(200).json({ id });

  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.sendStatus(500);
  }
});

app.post('/guardar-datos-flashcard', async (req, res) => {
  try {
    const { title, idLesson, subtitle, options, type} = req.body;
    checkFlashCard(type, options)

  } catch (error) {
    console.error('Error al guardar datos flashcard', error);
    res.sendStatus(500);
  }
})

async function checkFlashCard(type, options) {

  var correctValues
  var newOptions

  switch (type) {
    case "TrueFalse":
      for(let i=0; i < options.length; i++){
        correctValues[i].idOption = options[i].idOption
        correctValues[i].value = options[i].value
        newOptions[i].idOption = options[i].idOption
        newOptions[i].text = options[i].text
      }
    break;
    case "MultipleChoice":
      for(let i=0; i<options.length; i++){
        if(options[i].value===true){
          correctValues.push(options[i].idOption)
        }
        newOptions[i].idOption=options[i].idOption
        newOptions[i].text=options[i].text
      }
    break;
    case "LessonComplete":

    break;
    case "LessonRelate":

    break;
  }
}

app.get('/courses', async (req, res) => {
  try {
    // Lee el contenido del archivo courses.json
    const data = await fs.readFile('courses.json', 'utf8');
    
    // Parsea el contenido del archivo JSON
    const courses = JSON.parse(data);
    
    // Devuelve los cursos como respuesta
    res.json(courses);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.get('/levels', async (req, res) => {
  try {
    // Lee el contenido del archivo courses.json
    const data = await fs.readFile('levels.json', 'utf8');
    
    // Parsea el contenido del archivo JSON
    const levels = JSON.parse(data);
    
    // Devuelve los cursos como respuesta
    res.json(levels);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.get('/lessons', async (req, res) => {
  try {
    // Lee el contenido del archivo courses.json
    const data = await fs.readFile('lessons.json', 'utf8');
    
    // Parsea el contenido del archivo JSON
    const lessons = JSON.parse(data);
    
    // Devuelve los cursos como respuesta
    res.json(lessons);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    res.status(500).send('Error interno del servidor');
  }
});


app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
