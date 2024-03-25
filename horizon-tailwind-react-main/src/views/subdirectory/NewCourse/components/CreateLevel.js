import React, { useState } from "react";
import { Input } from "./Input";
import { ButtonLogOut } from "./randomButton";

const CreateLevel = ({clickHandler}) => {

    const [title, setTitle] = useState(""); // Estado para el valor del título
    const [part, setPart] = useState(""); // Estado para el valor de la foto

    // Manejar cambios en el input de título
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    // Manejar cambios en el input de foto
    const handlePartChange = (event) => {
        setPart(event.target.value);
    };

    // Función para llamar al clickHandler con los valores de los inputs
    const handleClick = () => {
        clickHandler(title, part);
    };

    return (
        <div style={{
            backgroundColor: "white",
            gridColumn: '2/ span 2 ',
            borderRadius: "16px",
            marginLeft: "15px",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Input placeholder="Title" value={title} onChange={handleTitleChange} />
                <Input placeholder="Foto" value={part} onChange={handlePartChange}/>
                <ButtonLogOut text={"Create new course"} type={"blue"} clickHandler={handleClick}></ButtonLogOut>
            </div>

        </div>
    );
};

export default CreateLevel;
