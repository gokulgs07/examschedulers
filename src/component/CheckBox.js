import React from 'react'

function CheckBox() {
  return (
<div
      className="App"
      style={{
        left: "122px",
        top: "183px",
        Width: "24px",
        Height: "24px", 
        background: "#FBFBFB",
        borderColor: "blue",
      }}
    >
      <div>
        <input type="checkbox" name="checkbox" value="checkbox" />
      </div>
    </div>
  )
}

export default CheckBox