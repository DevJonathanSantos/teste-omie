import React from "react";
import * as C from "./styles";



const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
  width
}) => {
  return (
    <>
      <C.Label htmlFor={id}>{label}:</C.Label>
      <C.Input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        style={{width:width}}
        
      />

    </>
  );
};

export default Input;
