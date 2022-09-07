import React from 'react'
import Bin from './Bin';
import TextComponent from './TextComponent'
import Tic from './Tic';

function BlueBox() {
  return (
<div
      style={{
        boxSizing: "border-box",
        width: "392px",
        height: "252px",
        left: "524px",
        top: "176px",
        border: "1px solid #5375E2",
        borderRadius: "10px",
        margin: "50px 30px 35px 30px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    ><div style={{display:"flex",direction:"row"}}>
        <TextComponent
          label="BE IT SEM 3"
          styleProps={{ fontWeight: "600", fontSize: "24px", lineHeight: "33px" ,marginLeft:"25px"}}
        />
      <Bin/>
      </div>
      <BlueBorder/>
    </div>
  )
}

export default BlueBox

export const BlueBorder = () => {
    return (
      <div
        style={{
          width: "392px",
          height: "56px",
          left: "102px",
          top: "680px",
          background: "#5375E2",
          borderRadius: "10px",
          marginTop:"165px",
        }}
      >
        <div style={{display:"flex",directoin:"row"}}><TextComponent
          label="Allocated"
          styleProps={{
            width: "96px",
            height: "27px",
            left: "986px",
            marginTop: "15px",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "27px",
            color: "#FFFFFF",
            marginLeft:"35px" 
          }}
        />
        <Tic/>
        </div>
        
      </div>
    );
  };