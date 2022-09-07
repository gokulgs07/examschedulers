import React from 'react'

function Time() {
  return (
    <div>
    <input
      type="Number"
      min={0}
      max={12}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8E8E8;",
        width: "43px",
        height: "44px",
        borderRadius: "4px",
        paddingLeft: "10px",
        margin: "0 15px 0 0",
      }}
      placeholder="HH"
    />
    <input
      type="Number"
      min={0}
      max={59}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8E8E8;",
        width: "43px",
        height: "44px",
        borderRadius: "4px",
        paddingLeft: "10px",
        margin: "0 15px",
      }}
      placeholder="MM"
    />
    <select
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8E8E8;",
        width: "58px",
        height: "48px",
        borderRadius: "4px",
        paddingLeft: "10px",
        margin: "0 15px",
      }}
    >
      <option>AM</option>
      <option>PM</option>
    </select>
  </div>
);
};


export default Time