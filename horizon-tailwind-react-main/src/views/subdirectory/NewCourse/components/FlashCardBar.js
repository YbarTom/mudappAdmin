import React, { useState } from "react";


const FlashCardBar = () => {
    
  return (
    <div style={{height:"86px", width:"100%",borderTopLeftRadius: "16px",borderTopRightRadius: "16px",display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
     <div style={{backgroundColor:"red",borderTopLeftRadius: "16px" }}></div>
     <div style={{backgroundColor:"yellow"}}></div>
     <div style={{backgroundColor:"green"}}></div>
     <div style={{backgroundColor:"blue",borderTopRightRadius: "16px"}}></div>

    </div>
  );
};



export default FlashCardBar;