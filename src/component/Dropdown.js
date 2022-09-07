import React from 'react'
import { formdata } from '../Data';
import SubjectName from './SubjectName';
import{useState,useEffect} from 'react';

function Dropdown() {
const [data,setData]=useState([]);
const [subId,setSubId]=useState([]);
const [subName,setSubName]=useState([]);
useEffect(() => {
  const forms=formdata.semester.EEE;
  setSubId(forms[0].subjects.subjectcode);
  setSubName(forms[0].subjects.subjectname);
  setData(forms)
}, [setData,setSubId,setSubName])

    console.log(subId);
    console.log(subName);
    const [sName, setSName] = useState(subName[0]);
    const handleChange = (event) => {
      console.log(event.target.value);
      setSName(event.target.value);
    };


    return (
      <div
        style={{
          boxSizing: "borderBox",
          display: "flex",
          flexDirection: "row",
          justifycontent: "center",
          alignitems: "center",
        }}
      >
        <select
          value={sName}
          onChange={handleChange}
          style={{
            boxSizing: "borderBox",
            display: "flex",
            flexDirection: "row",
            justifycontent: "center",
            alignitems: "center",
            MarginLeft: "0px",
            // gap: "8px",
            width: "181px",
            height: "56px",
            paddingleft: "10px",
            color: "#ABA9AE",
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px",
            margin: '0 18px 0 0'
          }}
        >
          {subId.map((sub,i) => {
            return <option style={{
              padding: "0 0 0 18px",
              backgroundColor:"#5375E2"
            }} value={subName[i]}>{sub}</option>;
          })}

        </select>
        <SubjectName sName={sName}/>
      </div>
    );
  };
  

export default Dropdown