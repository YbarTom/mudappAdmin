import React, { useState } from 'react';
import CourseCard from "./components/CourseCard";
import { ButtonLogOut } from "./components/randomButton";
import CourseCardPlus from "./components/CourseCardPlus";
const Test = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/guardar-datos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Datos guardados exitosamente.');
      } else {
        console.error('Error al guardar datos.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (

    <div>
      <div className="mt-3 w-[335px]">
        <ButtonLogOut></ButtonLogOut>
      </div>
      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <CourseCard text="Course Card 1" progress={90} />
        <CourseCard text="Course Card 1" progress={90} />

        <CourseCard text="Course Card 1" progress={90} />

        <CourseCard text="Course Card 1" progress={90} />

        <CourseCard text="Course Card 1" progress={90} />

        <CourseCardPlus/>
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <h2>Introduce tus datos:</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Test;
