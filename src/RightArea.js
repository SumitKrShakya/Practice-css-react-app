import React from "react"
import "./App.css"

function RightArea (props){
    console.log("rightArea updated",props.change);

    return (
        <div className="right-area">
            <div style={props.change} className="box">Lorem ipsum dolor sit amet, consectetur</div>
            {props.corrAns?<h1 className="corrAnsText">Correct Answer 😱 </h1>:""}
        </div>
    )
}
export default RightArea