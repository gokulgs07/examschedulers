import React from 'react'
import { formdata } from '../Data';
import Font from './Font';
import TextComponent from './TextComponent';


function Department() {
  return (
<div>
      <Font/>
      <TextComponent
        label="Department"
        styleProps={{
          display: "flex",
          flexDirection: "row",
          fontWeight: "700",
          fontSize: "16px",
          padding: "41px 278px 7px 105px",
        }}
      />
      <select
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "104px",
          width: "300px",
          borderRadius: "5px",

          color: "#A5A3A9",
          borderColor: "#A5A3A9",
          height: "56px",
        }}
      >
        {formdata.branchanddep.map((e,i) =>
          e.deps.map((ele) => <option value="">{ele}</option>)
        )}
      </select>
    </div>
  );
};
export default Department