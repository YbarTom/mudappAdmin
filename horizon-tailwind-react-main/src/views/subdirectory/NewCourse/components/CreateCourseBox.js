// En CreateCourseBox.jsx
import React, { useState } from "react";
import { Input } from "./Input";
import { ButtonLogOut } from "./randomButton";

const CreateCourseBox = ({ clickHandler }) => {
    const [title, setTitle] = useState(""); // Estado para el valor del título
    const [photo, setPhoto] = useState(""); // Estado para el valor de la foto

    // Manejar cambios en el input de título
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    // Manejar cambios en el input de foto
    const handlePhotoChange = (event) => {
        setPhoto(event.target.value);
    };

    // Función para llamar al clickHandler con los valores de los inputs
    const handleClick = () => {
        clickHandler(title, photo);
    };

    return (
        <div style={{
            backgroundColor: "white",
            gridColumn: '1/ span 3 ',
            borderRadius: "16px",
            marginLeft: "15px",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Pasar las funciones de cambio como propiedades a los inputs */}
                <Input placeholder="Title" value={title} onChange={handleTitleChange} />
                <Input placeholder="Foto" value={photo} onChange={handlePhotoChange} />
                {/* Llamar a handleClick cuando se hace clic en el botón */}
                <ButtonLogOut text={"Create new course"} type={"blue"} clickHandler={handleClick}></ButtonLogOut>
            </div>
        </div>
    );
};

export default CreateCourseBox;
