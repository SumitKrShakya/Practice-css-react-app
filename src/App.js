import "./App.css";
import LeftArea from "./LeftArea";
import RightArea from "./RightArea";
import React,{useState} from "react";
import data from "./data";


function App() {

  let obj = {

  }
  const [updestate, setupdestate] = useState(obj)

  const [corrAns, setCorrAns] = useState(0)

  const [index, setindex] = useState(0)

  const [showAns, setShowAns] = useState(0) // I used show answer here because in future if i want to include score
                                            // then it will be helful to send data to right area easily.\
  const showAnsHandler = (temp)=>{
    if(temp){
      setShowAns(1);
    }else{
      setShowAns(0);
    }
  }

  const indexHandler  = ()=>{
    setindex((index+1)%data.length)
    setCorrAns(0);
    setupdestate({});
    setShowAns(0);
  }

  const corrAnsHandler = (temp)=>{
    if(temp){
      setCorrAns(1);
    }else{
      setCorrAns(0);
    }
  }

  const updateHandler=(temp)=>{
    setupdestate(temp);
    // obj = temp;
  }
  console.log("app.js Updated")
  return (
    <>
    <LeftArea showAns={showAns} showAnsHandler = {showAnsHandler} ind={index} indexHandler={indexHandler} corrAnsHandler={corrAnsHandler} corrAns = {corrAns} update = {updateHandler}/>
    <RightArea  corrAns = {corrAns} change = {updestate}/>
    </>
  );
}

export default App;
