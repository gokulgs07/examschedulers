import React from 'react'
import Font from './Font';

import TextComponent from './TextComponent';

function Footer() {
  return (
    <>
    <Font/>
    <footer
      style={{
        backgroundColor: "#FBFBFB",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "150px",
        paddingRight: "150px",
        marginTop: "142px",
      }}
    >
      <TextComponent
        style={{
          fontWeight: "200",
          fontSize: "12px",
          lineHeight: "130%",
          width: "1440px",
          height: "42px",
        }}
        label="Conditions of use & sale"
      />

      <TextComponent
        style={{
          fontWeight: "200",
          fontSize: "12px",
          lineHeight: "130%",
          width: "1440px",
          height: "42px",
        }}
        label="Privacy notice"
      />
      <TextComponent
        style={{
          fontWeight: "200",
          fontSize: "12px",
          lineHeight: "130%",
          width: "1440px",
          height: "42px",
        }}
        label="Powered By Incresco"
      />
    </footer>
  </>
);
};
export default Footer