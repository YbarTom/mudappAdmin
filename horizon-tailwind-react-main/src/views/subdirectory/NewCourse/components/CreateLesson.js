import React, { useState } from "react";
import { Input } from "./Input";
import { ButtonLogOut } from "./randomButton";

const CreateLesson = ({ clickHandler }) => {
    const [title, setTitle] = useState(""); // Estado para el valor del título
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleClick = () => {
        clickHandler(title);
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
                <Input placeholder="Lesson" value={title} onChange={handleTitleChange} />
                <ButtonLogOut text={"Create new Lesson"} type={"blue"} clickHandler={handleClick}></ButtonLogOut>
            </div>

        </div>
    );
};

export default CreateLesson;
