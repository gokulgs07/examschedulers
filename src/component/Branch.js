import React, { useState } from 'react'
import Font from './Font';
import TextComponent from './TextComponent';
import {formdata} from '../Data';


function Branch() {
  const[data,setData]=useState([]);
  const[branch,setBranch]=useState([]);
  return (
    <div>
    <Font/>
    <TextComponent
      label="Branch"
      value={branch}
      styleProps={{
        fontWeight: "700",
        fontSize: "16px",
        padding: "38.26px 0px 12px 51px",
      }}
    />
    <select
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "51px",
        width: "300px",
        borderRadius: "5px",
        color: "#A5A3A9",
        borderColor: "#A5A3A9",
        height: "56px",
      }}
    >
      {formdata.branchanddep.map((e,i) => (
        <option key={i} value="">{e.branch}</option> 

      ))}
    </select>
  </div>
);
};


export default Branch