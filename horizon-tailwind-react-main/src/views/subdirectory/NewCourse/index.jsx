import React, { useState } from 'react';
import CourseSection from './components/CourseSection';
import Level from './components/Level';
import CourseSectionPlus from './components/CoursSectionPlus';
import FlashCardBar from './components/FlashCardBar';
import { color } from '@chakra-ui/system';
import FlashCardInsertBox from './components/FlashCardInsertBox';
import WhiteBox from './components/WhiteBox';
import CreateCourseBox from './components/CreateCourseBox';
import CreateLevel from './components/CreateLevel';
import CreateLesson from './components/CreateLesson';
import { TiThLarge } from 'react-icons/ti';

const Test = () => {
  const [showCourse, setShowCourse] = useState(true)
  const [showLevel, setShowLevel] = useState(false)
  const [showWhiteBox, setShowWhiteBox] = useState(false)
  const [showLesson, setShowLesson] = useState(false)
  //setShowCourse(false)
  const [levels, setLevels] = useState([]);
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

  const handleSubmitCourse = async (titleInput, photoInput) => {
    setShowCourse(false);
    setShowWhiteBox(true);

    try {
      const formData = { title: titleInput, photo: photoInput };

      // Update form data state
      setFormDataCourse(formData);

      // Make the API call to save course data
      const response = await fetch('http://localhost:3001/guardar-datos-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('ID del nuevo curso:', data.id);

      // Update form data state with course ID
      setFormDataLevel({ ...formDataLevel, idCourse: data.id });

      // Fetch levels data
      const response2 = await fetch(`http://localhost:3001/getLevels/${data.id}`, {
        method: 'POST',
      });

      const data2 = await response2.json();
      console.log(data2);

      // Update levels state
      setLevels(data2);

      console.log('Datos guardados exitosamente.');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }

    console.log(formDataCourse); // This will log the updated state after the asynchronous operations
  };


  const handleSubmitLevel = async (titleInput, partInput) => {

    console.log(titleInput)
    console.log(partInput)
    setShowLevel(false);
    setShowWhiteBox(true);
    try {

      const formData = { title: titleInput, part: partInput, idCourse: formDataLevel.idCourse };
      console.log("AAAAAAA")
      console.log(formData)

      setFormDataLevel(formData)

      console.log(formDataLevel)
      const response = await fetch('http://localhost:3001/guardar-datos-level', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('ID del nuevo level:', data.id);

      setFormDataLesson({ ...formDataLesson, idLevel: data.id });

      if (response.ok) {
        console.log('Datos guardados exitosamente level');

        const response2 = await fetch(`http://localhost:3001/getLevels/${formDataLevel.idCourse}`, {
          method: 'POST',
          mode: 'cors'
        });

        const data2 = await response2.json();
        console.log(data2[data2.length - 1]);

        setLevels(prevLevels => [...prevLevels, data2[data2.length - 1]]);

        console.log("AAA")

        console.log(levels)

      } else {
        console.error('Error al guardar datos.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const handleSubmitLesson = async (titleInput) => {

    console.log(titleInput)



    try {

      const formData = { title: titleInput, idLevel: formDataLesson.idLevel };

      setFormDataLesson(formData)

      const response = await fetch('http://localhost:3001/guardar-datos-lesson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Datos guardados exitosamente lesson');
        const response2 = await fetch(`http://localhost:3001/getLessons/${formDataLesson.idLevel}`, {
          method: 'POST',
          mode: 'cors'
        });

        const data2 = await response2.json();
        console.log(data2);
        const updatedLevels = levels.map(level => {
          // If the level id matches the idLevel from formDataLesson, update its lessons
          if (level.id === formDataLesson.idLevel) {
            // Return a new object with updated lessons
            return {
              ...level,
              lessons: data2
            };
          } else {
            // Return the original level if it doesn't match the idLevel
            return level;
          }
        });

        // Set the state with the updated levels array
        setLevels(updatedLevels);
      } else {
        console.error('Error al guardar datos.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }
  const handleSubmitFlashCard = async (e) => {
  };

  const addLessontoLevel = async (id) => {
    setShowWhiteBox(false);
    setShowLesson(true);
    setFormDataLesson({ ...formDataLesson, idLevel: id });
  };

  const handleShowLevel = () => {
    setShowWhiteBox(false);
    setShowLevel(true);
  }

  return (
    <>
      {showCourse ? (
        <CreateCourseBox clickHandler={handleSubmitCourse} />
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginTop: "10px" }}>
          <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)', scrollbarWidth: 'none', /* Para Firefox */ }}>
            <style>
              {`
                /* Para navegadores webkit (Chrome, Safari) */
                ::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            {levels.map((level, index) => (
              <Level key={index} title={level.title} parte={level.part} lessons={level.lessons} clickHandler={addLessontoLevel} id={level.id} />
            ))}
            <CourseSectionPlus clickhandler={handleShowLevel} />
          </div>

          {showWhiteBox && <WhiteBox />}
          {showLevel && <CreateLevel clickHandler={handleSubmitLevel}/>}
          {showLesson && <CreateLesson clickHandler={handleSubmitLesson}/>}
        </div>
      )}
    </>
  );
};

export default Test;
