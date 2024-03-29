import React from "react";
import { IconContainer, InputContainer, InputIconContainer } from "./styled";

export default function Input({
  icon,
  text,
  type,
  design,
  onChange,
  value,
  min,
  oninput,
  iconColor,
}) {
  return (
    <InputIconContainer design={design}>
      <IconContainer design={design} id="svg">
        <div className="inputIcon">{icon}</div>
      </IconContainer>
      <InputContainer
        design={design}
        placeholder={text}
        type={type}
        onChange={onChange}
        value={value}
        oninput={oninput}
        min={min}
      />
    </InputIconContainer>
  );
}
