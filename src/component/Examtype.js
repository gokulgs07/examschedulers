import React from 'react'
import Font from './Font';
import TextComponent from './TextComponent';

function Examtype() {
  return (
    <div>
    <Font/>
    <TextComponent
      label="ExamType"
      styleProps={{
        fontWeight: "700",
        fontSize: "16px",
        padding: "15px 113px 8px 48px",
      }}
    />
    <select
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "50px",
        width: "300px",
        borderRadius: "5px",
        // width:"1090px",
        color: "#A5A3A9",
        borderColor: "#A5A3A9",
        height: "56px",
      }}
    >
      <option value="">Internal</option>
      <option value="">Model</option>
      <option value="">Semester</option>
    </select>
  </div>
);
};
export default Examtype