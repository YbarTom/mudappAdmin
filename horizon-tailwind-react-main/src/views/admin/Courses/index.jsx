import React, { useState, useEffect } from 'react';
import CourseCard from "./components/CourseCard";
import { ButtonLogOut } from "./components/randomButton";
import CourseCardPlus from "./components/CourseCardPlus";
import routes from 'routes';
import { Link } from "react-router-dom";

const Test = () => {
  const [courses, setCourses] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    // Definimos una función asincrónica para hacer la solicitud al endpoint
    const fetchData = async () => {
      try {
        // Realizamos la solicitud GET al endpoint /courses
        const response = await fetch('http://localhost:3001/courses');
        if (!response.ok) {
          throw new Error('Error al obtener los cursos');
        }
        console.log(response)
        const data = await response.json();
        console.log(data)
        // Actualizamos el estado courses con los datos obtenidos
        setCourses(data);
      } catch (error) {
        console.error('Error al obtener los cursos:', error);
      }
    };

    // Llamamos a la función fetchData para obtener los cursos cuando el componente se monte
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario, por ejemplo, mediante una solicitud POST
    console.log('Formulario enviado:', formData);
    // Limpia el formulario y cierra el popup
    setFormData({ title: '', description: '' });
    setShowPopup(false);
    // Realizar la acción que hacían los enlaces antes
    // Por ejemplo, redirigir a una nueva ruta
    window.location.href = "/subdirectory/NewCourse";
  };

  return (
    <div>
      <div className="mt-3 w-[335px]">
        {/* Abre el popup cuando se hace clic en el botón */}
        <a href="#" onClick={() => setShowPopup(true)}>
          <ButtonLogOut text={"Create new course"} ></ButtonLogOut>
        </a>
      </div>

      {/* Popup para crear un nuevo curso */}
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Crear nuevo curso</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="title" placeholder="Título" value={formData.title} onChange={handleInputChange} />
              <input type="text" name="description" placeholder="Foto" value={formData.description} onChange={handleInputChange} />
              <button type="submit">Create</button>
            </form>
            <button onClick={() => setShowPopup(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Lista de cursos */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {courses.map((course, index) => (
          <CourseCard key={index} text={course.title} />
        ))}
        <button onClick={() => setShowPopup(true)}>
          <CourseCardPlus />
        </button>
      </div>

      {/* Resto del contenido... */}
    </div>
  );
};

export default Test;
