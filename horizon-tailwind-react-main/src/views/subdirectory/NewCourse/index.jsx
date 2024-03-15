import React, { useState, useEffect } from 'react';

const Test = () => {
  const [formDataCourse, setFormDataCourse] = useState({
    title: '',
    photo: ''
  });
  const [formDataLevel, setFormDataLevel] = useState({
    title: '',
    idCourse: 0,
  });
  const [showSecondForm, setShowSecondForm] = useState(false);

  const handleChangeCourse = (e) => {
    setFormDataCourse({ ...formDataCourse, [e.target.name]: e.target.value });
  };

  const handleChangeLevel = (e) => {
    setFormDataLevel({ ...formDataLevel, [e.target.name]: e.target.value });
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
        })
      });

      if (response.ok) {
        console.log('Datos guardados exitosamente level');
        setShowSecondForm(true); // Mostrar el segundo formulario después de enviar el primero
      } else {
        console.error('Error al guardar datos.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  useEffect(() => {
    // Este efecto se activa cada vez que formDataLevel cambia
    console.log(formDataLevel);
  }, [formDataLevel]);

  return (
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
      {showSecondForm && ( // Mostrar el segundo formulario si showSecondForm es verdadero
        <div>
          <h2>Segundo formulario:</h2>
          <form onSubmit={handleSubmitLevel}>
            <div>
              <label htmlFor="title">Nombre del Nivel:</label>
              <input type="text" id="title" name="title" value={formDataLevel.title} onChange={handleChangeLevel} />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Test;
