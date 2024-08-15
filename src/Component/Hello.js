import React from "react";
import { useContext } from "react";
import StyleContext from "../context/StyleContext";

const Hello = () => {

    const  obj  = useContext(StyleContext);

    let {style, updateToYellow, updateToBlue} = obj;

    // console.log(theme);  // {style: {…}, setStyle: ƒ}

    // const {style, setStyle} = theme;

    // console.log(style);  

    return (
        <div style={style}>
            <h1>Hello World</h1>
            <button onClick={updateToYellow}>Yellow</button>
            <button onClick={updateToBlue}>Blue</button>
            
        </div>
    )
}

export default Hello;


{/* <button onClick={()=>setStyle({...style, color:"tomato",backgroundColor: "yellow", })}> Change </button> */}