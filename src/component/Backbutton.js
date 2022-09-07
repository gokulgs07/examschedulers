import React from 'react'
import Font from './Font'
import TextComponent from './TextComponent'

function Backbutton() {
  return (
    <div style={{ marginLeft: "35px ", marginTop: "50px" }}>
      <img alt = "" src="https://i.ibb.co/HnM1WDs/Vectorarrow.png" />
      <TextComponent
        label="Create new schedule"
        styleProps={{
          padding: "10px",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "33px",
          marginTop: "-44px",
          marginLeft: "43px",
        }}
      />
      <Font/>
    </div>
  )
}

export default Backbutton