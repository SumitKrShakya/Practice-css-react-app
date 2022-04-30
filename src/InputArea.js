import React, { useState } from "react";
import "./App.css";

function InputArea(props) {
  const [input, setinput] = useState("");
  
  return (
    <div className="inputAreaMainDiv">
      <div className="mainInput">
        <ol>
          <li>div &#123;</li>
          <li>&emsp;&emsp;&emsp;
            <input
              value={input}
              onChange={(e) => {
                setinput(e.target.value);
                props.check(e.target.value);
              }}
            ></input>
          </li>
          
          <li>&#125;</li>
        </ol>
      </div>

      <button className="button-30" onClick={() => props.check(input)}>
        Check
      </button>
    </div>
  );
}

export default InputArea;
