import React from 'react'
import TextComponent from './TextComponent'

function Allocate() {
  return (
    <div>
    <button
      style={{
        width: "100px",
        height: "36px",
        backgroundColor:"#ffffff",
        border:" 1px solid #5375E2",
        borderRadius:"5px",
        marginTop:"10px",
        marginLeft:"105px"
      }}
    >
      <div
        style={{
          fontSize: "16px",
          color: "#5375E2",
          fontFamily: "Nunito",
          marginTop:"-1px"
        }}
      >
        <TextComponent label="Allocate" />
      </div>
    </button>
  </div>
)
  
}

export default Allocate