import React from 'react'
import Allocate from './Allocate';
import Bin from './Bin';
import TextComponent from './TextComponent'

function OrangeBox() {
  return (
    <div
    style={{
      boxSizing: "border-box",
      width: "392px",
      height: "252px",
      left: "524px",
      top: "176px",
      border: "1px solid #FFA500",
      borderRadius: "10px",
      margin: "50px 30px 35px 30px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    }}
  >
    <div style={{display:"flex",direction:"row"}}>
      <TextComponent
        label="BE IT SEM 3"
        styleProps={{ fontWeight: "600", fontSize: "24px", lineHeight: "33px" ,marginLeft:"25px",marginTop:"10px"}}
      />
      <Bin/>
    </div>
    <OrangeBorder />
  </div>
  )
}

export default OrangeBox
export const OrangeBorder = () => {
    return (
      <div
        style={{
          width: "392px",
          height: "56px",
          left: "102px",
          top: "680px",
          background: "#FFA500",
          borderRadius: "10px",
          marginTop:"151px",
          
        }}
      >
        <div style={{display:"flex",directoin:"row"}}><TextComponent
          label="Not Allocated"
          styleProps={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "27px",
            color: "#FFFFFF",
            marginLeft:"30px",
            marginTop:"14px"
            
          }}
        />
        <Allocate/>
        </div>
      </div>
    );
  };
  