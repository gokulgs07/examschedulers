import React from 'react'
import Font from './Font';
import InputComponents from './InputComponents';
import TextComponent from './TextComponent';


function Labs() {
  return (
    <div>
    <Font/>
    <InputComponents
      // onchange={(a) => {
      //   setLabs(a.target.value);
      // }}
      type="text"
      label={
        <TextComponent
          label="Labs"
          styleProps={{
            display: "flex",
            flexDirection: "row",
            fontWeight: "700",
            fontSize: "16px",
            padding: "19px 117px 6px 3px",
          }}
        />
      }
      placeholder="2"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",

        height: "51px",
        color: "#A5A3A9",
        padding: "22px 114px -3px 2px",
      }}
    />
  </div>
);
};
  
export default Labs