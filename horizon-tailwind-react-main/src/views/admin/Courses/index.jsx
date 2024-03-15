import React, { useState } from 'react';
import CourseCard from "./components/CourseCard";
import { ButtonLogOut } from "./components/randomButton";
import CourseCardPlus from "./components/CourseCardPlus";
import routes from 'routes';
import { Link } from "react-router-dom";

const Test = () => {
  const [formData, setFormData] = useState({
    title: '',
    photo: '',
    levels: []
  });
  const [showSecondForm, setShowSecondForm] = useState(false);

  const handleChangeCourse = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeCourseLevels = (e) => {
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
          photo: formData.photo,
          levels: formData.levels // Aquí estamos enviando directamente el array de niveles
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
      <div className="mt-3 w-[335px]">
      <Link key={3} to={"/subdirectory/NewCourse"}>
        <ButtonLogOut text={"Create new course"} ></ButtonLogOut>
        </Link>
      </div>
      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <CourseCard text="Course Card 1" progress={90} />
        <CourseCard text="Course Card 1" progress={90} />

        <CourseCard text="Course Card 1" progress={90} />

        <CourseCard text="Course Card 1" progress={90} />

        <CourseCard text="Course Card 1" progress={90} />

        <Link key={3} to={"/subdirectory/NewCourse"}>
        <CourseCardPlus />
        </Link>
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
                  <label htmlFor="title">Nombre del curso:</label>
                  <input type="text" id="title" name="title" value={formData.title} onChange={handleChangeCourse} />
                </div>
                <div>
                  <label htmlFor="photo">Foto:</label>
                  <input type="text" id="photo" name="photo" value={formData.photo} onChange={handleChangeCourse} />
                </div>
                <div>
                  <label htmlFor="levels">Número de niveles:</label>
                  <input type="text" id="levels" name="levels" value={formData.levels} onChange={handleChangeCourseLevels} />
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
