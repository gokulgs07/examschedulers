import React from 'react'
import TextComponent from './TextComponent';

function Date() {
  return (
<div>
      <TextComponent styleProps={{ marginTop: "-23px" }} label="Date" />
      <input
        type="date"
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          width: "260px",
          height: "56px",
          borderRadius: "4px",
          color: "#ABA9AE",
        }}
      />
    </div>
  );
};

export default Date