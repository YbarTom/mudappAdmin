import React, { useState } from 'react';
import CourseCard from "./components/CourseCard";
import { ButtonLogOut } from "./components/randomButton";
import CourseCardPlus from "./components/CourseCardPlus";
const Test = () => {
  const [formData, setFormData] = useState({
    titleCourse: '',
  });
  const [showSecondForm, setShowSecondForm] = useState(false);

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

  const handleSubmitLevel= async (e) => {
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
      <div className="mt-3 w-[335px]">
        <ButtonLogOut text={"Create new course"}></ButtonLogOut>
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
          {!showSecondForm && ( // Mostrar el primer formulario si showSecondForm es falso
            <div>
              <h2>Introduce tus datos:</h2>
              <form onSubmit={handleSubmitCourse}>
                <div>
                  <label htmlFor="titleCourse">Nombre del curso:</label>
                  <input type="text" id="titleCourse" name="titleCourse" value={formData.titleCourse} onChange={handleChange} />
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
      </div>
    </div>
  );
};

export default Test;
