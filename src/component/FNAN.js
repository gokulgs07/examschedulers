import React from 'react'
import { useState } from "react";
function FNAN() {

    const [activeButtonFN, setActiveButtonFN] = useState(false);
    const [activeButtonBN, setActiveButtonBN] = useState(false);
    const fnClick = () => {
      activeButtonFN === activeButtonBN ? setActiveButtonFN(true) : setActiveButtonFN(false);
    };
  
    const bnClick = () => {
      activeButtonBN === activeButtonFN ? setActiveButtonBN(true) : setActiveButtonBN(false);
    }
  
    return (
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "18px",
      }}>
      <button
        onClick={fnClick}
        style={{
          boxSizing: "border-box",
          height: "56px",
          width: "22.05px",
          borderRadius: "5px",
          border: " 1px solid #5375E2",

          padding: "17px 36px 11PX 20PX",
          background: `${activeButtonFN ===true ? "#5375E2" : "white"}`,
          color: `${activeButtonFN === false ? "#5375E2" : "white"}`,
          // color:"#5375E2",
        }}
      >
        FN
      </button>
      <button
        onClick={bnClick}
        style={{
          boxSizing: "border-box",
          height: "56px",
          width: "22.05px",
          borderRadius: "5px",
          border: " 1px solid #5375E2",

          padding: "17px 36px 11PX 20PX",
          background: `${activeButtonBN === true ? "#5375E2" : "white"}`,
          color: `${activeButtonBN === false ? "#5375E2" : "white"}`,
          // color:"#5375E2",
        }}
      >
        AN
      </button>
      </div>
    );
  };
  

export default FNAN