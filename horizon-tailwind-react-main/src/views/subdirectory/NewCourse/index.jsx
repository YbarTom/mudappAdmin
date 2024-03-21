import React, { useState } from 'react';
import CourseSection from './components/CourseSection';
import Level from './components/Level';
import CourseSectionPlus from './components/CoursSectionPlus';

const Test = () => {
  const [levels, setLevels] = useState([]);
  const [lessons, setLessons] = useState([]);
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

    setShowSecondForm(true);

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

      setFormDataLevel({ ...formDataLevel, idCourse: data.id });

      const response2 = await fetch(`http://localhost:3001/getLevels/${data.id}`, {
        method: 'POST',
        mode: 'cors'
      });

      const data2 = await response2.json();
      console.log(data2);

      setLevels(data2);

      console.log('Datos guardados exitosamente.');

      
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

      const data = await response.json();
      console.log('ID del nuevo level:', data.id);

      setFormDataLesson({ ...formDataLesson, idLevel: data.id });

      if (response.ok) {
        console.log('Datos guardados exitosamente level');
        setShowThirdForm(true);

        const response2 = await fetch(`http://localhost:3001/getLevels/${formDataLevel.idCourse}`, {
        method: 'POST',
        mode: 'cors'
      });

      const data2 = await response2.json();
      console.log(data2);
      setLevels(data2);

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
        const response2 = await fetch(`http://localhost:3001/getLessons/${formDataLesson.idLevel}`, {
        method: 'POST',
        mode: 'cors'
      });

      const data2 = await response2.json();
      console.log(data2);
      setLessons(data2);
      //setShowFourForm(true);
      } else {
        console.error('Error al guardar datos.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const handleSubmitFlashCard = async (e) => {
    e.preventDefault();
    setShowFourForm(true);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginTop: "10px" }}>
      <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
        {levels.map((level, index) => (
          <Level key={index} title={level.title} parte={level.part} lessons={lessons} />
        ))}
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
        {showSecondForm && !showThirdForm && !showFourForm && (
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
        {showThirdForm && !showFourForm && (
          <div>
            <h2>Tercer formulario:</h2>
            <form onSubmit={handleSubmitLesson}>
              <div>
                <label htmlFor="title">Nombre de la lesson:</label>
                <input type="text" id="title" name="title" value={formDataLesson.title} onChange={handleChangeLesson} />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
