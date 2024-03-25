import React, { useState } from "react";
import { Input } from "./Input";
import { ButtonLogOut } from "./randomButton";
import logo from "assets/img/ColleBree/Colibri.png"
const WhiteBox = () => {
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
               <img src={logo} alt="logo" style={{width: "100px", height: "100px"}}/>
            </div>

        </div>
    );
};

export default WhiteBox;
