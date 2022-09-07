import React from "react";
import BlueBox from "../component/BlueBox";
import Checkbutton from "../component/Checkbutton";
import DotBox from "../component/DotBox";
import Filter from "../component/Filter";
import Footer from "../component/Footer";
import Header from "../component/Header";
import OrangeBox from "../component/OrangeBox";
import TextComponent from "../component/TextComponent";
function LandingPage1() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          directon: "row",
          marginTop: "10px",
          marginBottom: "-35px",
          marginLeft: "70%",
          opacity: "0.8",

        }}
      >
        <TextComponent label="Show Allocated" />
        <Checkbutton/>
        <TextComponent label="Filter" styleProps={{ marginLeft: "10px" }} />
        <Filter/>
      </div>
      <div style={{ display: "flex", direction: "row" }}>
        <DotBox />
        <OrangeBox />
        <BlueBox />
      </div>
      <div style={{ display: "flex", direction: "row" }}>
        <div style={{ marginLeft: "75px" }}>
          <BlueBox/>
        </div>
        <OrangeBox />
        <BlueBox />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage1;
