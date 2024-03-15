import React, { useState } from 'react';

const Test = () => {
  const [formData, setFormData] = useState({
    title: '',
    photo: ''
  });
  const [showSecondForm, setShowSecondForm] = useState(false);

  const handleChangeCourse = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          title: formData.title,
          photo: formData.photo
        })
      });

      if (response.ok) {
        console.log('Datos guardados exitosamente.');
        setShowSecondForm(true); // Mostrar el segundo formulario después de enviar el primero
      } else {
        console.error('Error al guardar datos.');
      }
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
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Datos guardados exitosamente.');
        setShowSecondForm(true); // Mostrar el segundo formulario después de enviar el primero
      } else {
        console.error('Error al guardar datos.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };
  return (
    <div>
      {!showSecondForm && (
        <div>
          <h2>Introduce tus datos:</h2>
          <form onSubmit={handleSubmitCourse}>
            <div>
              <label htmlFor="title">Nombre del curso:</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChangeCourse} />
            </div>
            <div>
              <label htmlFor="photo">Foto:</label>
              <input type="text" id="photo" name="photo" value={formData.photo} onChange={handleChangeCourse} />
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
              <label htmlFor="titleLevel">Nombre del curso2:</label>
              <input type="text" id="titleLevel" name="titleLevel" value={formData.titleLevel} onChange={handleChange} />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Test;
