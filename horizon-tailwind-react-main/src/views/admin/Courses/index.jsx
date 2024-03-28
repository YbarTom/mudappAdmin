// En Test.js
import React, { useState, useEffect } from 'react';
import CourseCard from "./components/CourseCard";
import { ButtonLogOut } from "./components/randomButton";
import CourseCardPlus from "./components/CourseCardPlus";
import routes from 'routes';
import { Link } from "react-router-dom";

const Test = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/courses');
      if (!response.ok) {
        throw new Error('Error al obtener los cursos');
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error al obtener los cursos:', error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/courses/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar el curso");
      }
      console.log(response);
      // Después de eliminar, actualiza la lista de cursos
      fetchData();
    } catch (error) {
      console.error("Error al eliminar el curso:", error);
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

        {courses.map((course, index) => (
          <CourseCard key={index} text={course.title} id={course.id} onDelete={handleDeleteCourse} />
          ))}

        <Link key={3} to={"/subdirectory/NewCourse"}>
          <CourseCardPlus />
        </Link>
      </div>

      {/* Tables & Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
      </div>
    </div>
  );
};

export default Test;
