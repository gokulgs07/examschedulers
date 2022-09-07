import React from 'react'

function SAubjectName(sName) {

    console.log(sName);
  return (
    <div>
      <input
        type="text"                      
        label=""
        value= {sName.sName}
        readOnly
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "423px",
          height: "56px",
          gap: "9px",
          backgroundColor: "#F2F2F2",
          borderColour: "#F2F2F2",
          borderRadius: "5px",
          border: "1px solid #FFFFFF",
          color: "#ABA9AE",
          padding: '0 0 0 20px'
        }}
        />
    </div>
  )
}

export default SAubjectName