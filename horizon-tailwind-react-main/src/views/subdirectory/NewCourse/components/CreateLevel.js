import React, { useState } from "react";
import { Input } from "./Input";
import { ButtonLogOut } from "./randomButton";

const CreateLevel = () => {
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
                <Input placeholder="Title" />
                <Input placeholder="Foto" />
                <ButtonLogOut text={"Create new course"} type={"blue"}></ButtonLogOut>
            </div>

        </div>
    );
};

export default CreateLevel;
