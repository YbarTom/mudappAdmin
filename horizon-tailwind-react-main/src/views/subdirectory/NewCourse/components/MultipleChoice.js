import React, { useState } from "react";

const MultipleChoice = () => {

    return (
        <div style={{ margin: "20px" }}>
            <p style={{marginLeft:"18px"}}><b>Introduce la Pregunta</b></p>
            <textarea className="textarea" placeholder="Introduce la Pregunta..." style={{
                backgroundColor: "#dddddd",
                color: "#666666",
                padding: "1em",
                borderRadius: "16px",
                border: "2px solid transparent",
                outline: "none",
                fontFamily: "Heebo, sans-serif",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "1.4",
                width: "100% ", /* para compensar el margen */
                height: "100px",
                transition: "all 0.2s"
            }}>
            </textarea>
        </div>
    );
};

export default MultipleChoice;
