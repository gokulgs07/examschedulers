import React from 'react'
import TextComponent from './TextComponent';

function InputComponents(props) {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: props.type === "text" ? "column" : "row",
      padding: "20px",
    }}
  >
    {props.type === "radio" && <input {...props}></input>}
    <TextComponent
      label={props.label}
      CustomTag={props.type === "text" ? "div" : "span"}
    />
    {props.type === "text" && <input {...props} onChange={props?.onchange} />}
  </div>
);
};

export default InputComponents