import React from 'react'
import Date from './Date';
import Dropdown from './Dropdown';
import FNAN from './FNAN';
export default function Sub() {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      gap: "18px",
      width: "344px",
      height: "56px",
    }}
  >
    <Dropdown/>
    <Date/>
    <FNAN/>
  </div>
  );
}
