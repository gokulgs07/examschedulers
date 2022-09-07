import React from 'react'
import Create from './Create'

function DotBox() {
  return (
    <div
    style={{
      boxSizing: "border-box",
      width: "392px",
      height: "252px",
      left: "102px",
      top: "175px",
      background: "#F6F6F6",
      border: "1px",
      borderStyle: "Dashed",
      borderWidth: "1px",
      borderRadius: "10px",
      margin: "50px 30px 35px 102px",
    }}
  >
    <Create/>
  </div>
  )
}

export default DotBox