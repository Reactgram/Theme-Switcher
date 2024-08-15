import React from "react";
import StyleContext from "./StyleContext";


const StyleProvider = (props) => {

    const [style, setStyle] = React.useState({
        color: "red",
        backgroundColor: "black",
        fontSize: "2em",
        height: "100vh",
    })


    return(
        <StyleContext.Provider value={
            {
                style: style,
                updateToYellow:()=>setStyle({...style, color:"tomato",backgroundColor: "yellow", }),
                updateToBlue:()=>setStyle({...style, color:"white",backgroundColor: "blue", }), 

            }
            }>
            {props.children}
        </StyleContext.Provider>
    )
}


export default StyleProvider;