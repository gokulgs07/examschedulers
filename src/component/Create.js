import React from 'react'
import TextComponent from './TextComponent'

function Create() {
  return (
<div>
        <button
        style={{
          width: "174px",
          height: "40px",
          backgroundColor:"#5375E2",
          border:" 1px solid #5375E2",
          borderRadius:"5px",
          margin:"100px"
        }}
      >
        <div
          style={{
            fontSize: "20px",
            color: "white",
            fontFamily: "Nunito",
            marginTop:"0px"
          }}
        >
          <TextComponent label="+ Create New" />
        </div>
      </button>
    </div>
  )
}

export default Create