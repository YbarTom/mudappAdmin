import React, { useState } from "react";
import TextAreaEditor from "./TextAreaWithoutButton";
import { TrueFalseComponent } from "./TrueFalseComponent";

const TrueFalse = ({idLesson}) => {

    return (
        <div style={{ margin: "20px" }}>
            <h1>True False</h1>
            <TrueFalseComponent idLesson={idLesson}/>
        </div>
    );
};

export default TrueFalse;
