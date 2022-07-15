import React from "react";
import * as C from "./styles";



const Button = ({children,style,onClick
 

}) => {


  return (
    <>

    <C.Button style={style} onClick={onClick}>{children}</C.Button>
        

    </>
  );
};

export default Button;
