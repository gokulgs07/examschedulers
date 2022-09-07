import React from 'react'
import Person from './Person';
import TextComponent from './TextComponent';
import {Link} from 'react-router-dom';

function Landing() {
  return (
    <div>
      <Person/>
      <TextComponent
        label="There are no schedules get started by creating schedules"
        styleProps={{
          fontFamily: "Nunito",
          fontStyle: "normal",
          paddingLeft: "500px",
          letterSpacing: "0.03em",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "130%",
        }}
      />
      <Link to="/ExamSchedule1">
      <button
        style={{
          background: "#5375E2",
          borderRadius: "5px",
          height: "39.96094512939453px",
          width: "192px",
          margin: " 30px 624px 245.04px 624px",
          top: "615px",
          borderColor: "white",
          marginBottom: "40px",
        }}
      >
        <TextComponent
          label="+ Create New"
          styleProps={{
            fontFamily: "Nunito",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "27px",
            color: "#FFFFFF",
          }}
        />
      </button>
      </Link>
    </div>
  );
};

export default Landing