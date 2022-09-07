import React from 'react'
import GlobalStyle from './GlobalStyle';
import Logo from './Logo';
import TextComponent from './TextComponent';
import Vector from './Vector';

function Header() {
  return (<>
    <GlobalStyle/>
    <div
      style={{
        backgroundColor: "#5375E2",
        color: "white",
        fontFamily: "Nunito",
        fontWeight: "700",
        margin: "0",
        display: "flex",
        padding: "10px",
        height: "70.95px",
      }}
    >
      <div>
        <Logo/>
      </div>
      <div
        style={{
          paddingLeft: "70px",
          paddingTop: "77px",
          paddingRight: "41px",
        }}
      ></div>
      <div style={{ flexDirection: "column" }}>
        <TextComponent
          label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
          styleProps={{
            fontSize: "16px",
            fontFamily: "Nunito",
            textAlign: "center",
            lineHeight: "21.82px",
            paddingTop: "2px",
            marginLeft: "-68px",
          }}
        />
        <br></br>
        <TextComponent
          label="Exam Scheduler"
          styleProps={{
            fontSize: "32px",
            paddingBottom: "15px",
            fontFamily: "Nunito",
            textAlign: "left",
            marginLeft: "-68px",
            marginTop: "-20px",
          }}
        />
      </div>
      <div></div>
      <Vector/>
      <TextComponent
        label="Waseem"
        CustomTag="span"
        styleProps={{
          MarginLeft: "500px",
          fontSize: "20px",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Nunito",
          paddingTop: "25px",
          paddingLeft: "",
        }}
      />
    </div>
  </>
);
};
export default Header