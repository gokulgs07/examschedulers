import React from 'react'

function Subject() {
  return (
<div>
<div style={{ padding:"32px 87px 0px 30px"}}>
Subject
</div>

      <input
        type="text"                      
        label="Subject"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "423px",
          height: "56px",
          gap: "9px",
          // backgroundColor: "#F2F2F2",
          borderColour: "#F2F2F2",
          borderRadius: "5px",
          // border: "#FFFFFF",
          color: "#ABA9AE",
          marginLeft:"20px",
          marginTop:"12px"
        }}
        />
    </div>
  )
}

export default Subject