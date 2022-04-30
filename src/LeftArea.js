import React, { useState } from "react";
import "./App.css";
import data from "./data";
import InputArea from "./InputArea";

function LeftArea(props) {
  console.log("left area updated");
  let objUser = {};
  const [cssprop, setcssprop] = useState(objUser);
  const index = props.ind;

  const checkHandler = (text) => {
    //----------------INPUT DATA PROCESSING---------
    text = text.trim();
    if (text[text.length - 1] !== ";") {
      setcssprop({});
      props.update({});
      props.corrAnsHandler(0);
      return;
    }

    text = text.slice(0, -1);
    const arr = text.split(":");
    if (arr.length !== 2) {
      setcssprop({});
      props.update({});
      props.corrAnsHandler(0);
      return; // RETURN BECAUSE THERE ARE NO 2 ELE IN ARR.
    }

    const property = arr[0].trim();
    const propertyVal = arr[1].trim();

    if (property.length === 0 || propertyVal.length === 0) {
      setcssprop({});
      props.update({});
      props.corrAnsHandler(0);
      return; // RETURN BEACUSE ON OF THE PROPERTY IS.
    }

    if (property.split("-").length !== 1) {
      const propLongArr = property.split("-");
      let tempPropArr = "";
      propLongArr.map((tt, i) => {
        if (i !== 0) {
          let result = tt[0].toUpperCase() + tt.substr(1, tt.length);
          tempPropArr += result;
        }
        return(null)
      });
      console.log(cssprop,toggleShowAnsButton);
      console.log(tempPropArr);
      // property = tempPropArr
    }

    //----------------- ACTUAL DATA PROCESSING ------------------------
    let d = data[index].ans.trim();
    d = d.slice(0, -1);
    const arrAns = d.split(":");
    const propertyAns = arrAns[0].trim();
    const propertyValAns = arrAns[1].trim();

    if (property === propertyAns && propertyVal === propertyValAns) {
      console.log("correct ans");
      props.corrAnsHandler(1);
    } else {
      props.corrAnsHandler(0);
    }

    // edit after compleate to
    let jsClassName = property;
    let objUserTemp = {};
    objUserTemp[jsClassName] = propertyVal;

    setcssprop(objUserTemp);
    props.update(objUserTemp);

    // if(data[index].ans)

    // console.log(d, property, propertyAns, propertyVal.propertyValAns);
    console.log(objUserTemp);
  };

  let toggleShowAnsButton = 0;

  return (
    <div className="left-area">
      <div className="headding">Learn CSS</div>
      <br />
      {/* <div style={cssprop} className="que">{data[index].que}</div> */}
      <div className="que">{data[index].que}</div>
      <br />
      <button className="button-30"
        onClick={(e) => {
          // props.showAnsHandler(toggleShowAnsButton ^ 1);
          // toggleShowAnsButton ^= 1;
          props.showAnsHandler(1);
          console.log(e.target);
          e.target.style.cursor="not-allowed"
        }}
      >
        Show answer
      </button>
      <br />
      <br />
      {props.showAns?<div className="ans">{data[index].ans}</div>:""}
      {/* {props.showAns?console.log("true"):console.log("false")} */}
      <br />
      {/* <br /> */}
      <InputArea check={checkHandler} />
      <button className="button-30 nextQue" onClick={() => props.indexHandler()}>Next Question</button>
    </div>
  );
}
export default LeftArea;
