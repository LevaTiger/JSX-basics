import { useState } from "react";
import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn";
import UseState from "./useState";
import UseEffect from "./UseEffect";

const Hooks =()=>{


    const [color, setColor] = useState("red");

    const padding2Border={
        border:'1px solid black',
        padding:'1rem',
        paddingBottom:'2rem'
    }
    return (
      <div className="container" style={paddingStyle}>
        <div style={backButtonStyle} onClick={goBack}>Back</div>
        <div style={padding2Border}>
            <h1>My favorite color is {color}!</h1>
            <button
              type="button"
              onClick={() => setColor("blue")}
            >Blue</button>
            <button
              type="button"
              onClick={() => setColor("red")}
            >Red</button>
            <button
              type="button"
              onClick={() => setColor("pink")}
            >Pink</button>
            <button
              type="button"
              onClick={() => setColor("green")}
            >Green</button>
        </div>
        <UseState />
        <UseEffect />
      </div>
    );
  }
  export default Hooks;