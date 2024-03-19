import React, { useState, useEffect } from 'react';
import CourseSection from './components/CourseSection';
import Lesson from './components/Lesson';
import CourseSectionPlus from './components/CoursSectionPlus';

import Level from './components/Level';

const Test = () => {

  var levels = []

  const [formDataCourse, setFormDataCourse] = useState({
    title: '',
    photo: ''
  });
  const [formDataLevel, setFormDataLevel] = useState({
    title: '',
    idCourse: 0,
    part: 0
  });
  const [formDataLesson, setFormDataLesson] = useState({
    title: '',
    idLevel: 0
  });
  
  const [formDataFlashCard, setFormDataFlashCard] = useState({
    title: '',
  });
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);
  const [showFourForm, setShowFourForm] = useState(false);

  const handleChangeCourse = (e) => {
    setFormDataCourse({ ...formDataCourse, [e.target.name]: e.target.value });
  };

  const handleChangeLevel = (e) => {
    setFormDataLevel({ ...formDataLevel, [e.target.name]: e.target.value });
  };

  const handleChangeLesson = (e) => {
    setFormDataLesson({ ...formDataLesson, [e.target.name]: e.target.value });
  };

  const handleChangeFlashCard = (e) => {
    setFormDataFlashCard({ ...formDataFlashCard, [e.target.name]: e.target.value });
  };
  const handleSubmitCourse = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/guardar-datos-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: formDataCourse.title,
          photo: formDataCourse.photo
        })
      });

      const data = await response.json();
      console.log('ID del nuevo curso:', data.id);

      // Actualizar el estado formDataLevel con el ID del curso recién guardado
      setFormDataLevel({ ...formDataLevel, idCourse: data.id });

      console.log('Datos guardados exitosamente.');
      setShowSecondForm(true);
      // Aquí puedes hacer lo que quieras con el ID, por ejemplo, mostrarlo en la interfaz de usuario
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const handleSubmitLevel = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/guardar-datos-level', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: formDataLevel.title,
          idCourse: formDataLevel.idCourse,
          part: formDataLevel.part
        })
      });

      var level = {
        title: formDataLevel.title,
        part: formDataLevel.part
      }

      levels.push(level)

      console.log(level)

      const data = await response.json();
      console.log('ID del nuevo level:', data.id);

      // Actualizar el estado formDataLevel con el ID del curso recién guardado
      setFormDataLesson({ ...formDataLesson, idLevel: data.id });

      if (response.ok) {
        console.log('Datos guardados exitosamente level');
        setShowThirdForm(true); // Mostrar el tercer formulario después de enviar el segundo
      } else {
        console.error('Error al guardar datos.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const handleSubmitLesson = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/guardar-datos-lesson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: formDataLesson.title,
          idLevel: formDataLesson.idLevel
        })
      });

      if (response.ok) {
        console.log('Datos guardados exitosamente lesson');
        setShowFourForm(true); // Mostrar el tercer formulario después de enviar el segundo
      } else {
        console.error('Error al guardar datos.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }
  const handleSubmitFlashCard= async (e) => {
    setShowFourForm(true);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginTop:"10px"}}>
      <div>
        <Level/>
        <CourseSectionPlus></CourseSectionPlus>

      </div>
      <div> </div>
      <div>
      {!showSecondForm && (
        <div>
          <h2>Introduce tus datos:</h2>
          <form onSubmit={handleSubmitCourse}>
            <div>
              <label htmlFor="title">Nombre del curso:</label>
              <input type="text" id="title" name="title" value={formDataCourse.title} onChange={handleChangeCourse} />
            </div>
            <div>
              <label htmlFor="photo">Foto:</label>
              <input type="text" id="photo" name="photo" value={formDataCourse.photo} onChange={handleChangeCourse} />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
      {showSecondForm && !showThirdForm && !showFourForm && ( // Mostrar el segundo formulario si showSecondForm es verdadero y el tercer formulario no está mostrándose
        <div>
          <h2>Segundo formulario:</h2>
          <form onSubmit={handleSubmitLevel}>
            <div>
              <label htmlFor="title">Nombre del Nivel:</label>
              <input type="text" id="title" name="title" value={formDataLevel.title} onChange={handleChangeLevel} />
            </div>
            <div>
              <label htmlFor="part">Parte:</label>
              <input type="number" id="part" name="part" value={formDataLevel.part} onChange={handleChangeLevel} />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
      {showThirdForm && !showFourForm && ( // Mostrar el tercer formulario si showThirdForm es verdadero
        <div>
          <h2>Tercer formulario:</h2>
          <form onSubmit={handleSubmitLesson}>
            <div>
              <label htmlFor="title">Nombre de la lesson:</label>
              <input type="text" id="title" name="title" value={formDataLesson.title} onChange={handleChangeLesson} />
            </div>
            <button type="submit">Enviar</button>
          </form>
          {/* Aquí colocarías el contenido y el formulario del tercer paso */}
        </div>
      )}

      {showFourForm && ( // Mostrar el tercer formulario si showThirdForm es verdadero
        <div>
          <h2>Cuarto formulario:</h2>
          <form onSubmit={handleSubmitFlashCard}>
            <div>
              <label htmlFor="title">Nombre de la lesson:</label>
              <input type="text" id="title" name="title" value={formDataFlashCard.title} onChange={handleChangeFlashCard} />
            </div>
            <button type="submit">Enviar</button>
          </form>
          {/* Aquí colocarías el contenido y el formulario del tercer paso */}
        </div>
      )}
      </div>
    </div>
  );
};

export default Test;