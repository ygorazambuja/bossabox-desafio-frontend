import React from "react";
import { StyledTitle } from "./styles";

export interface ITitle {
  size?: number;
}

const Title: React.FC<ITitle> = ({ size, children }) => {
  return <StyledTitle size={size}> {children}</StyledTitle>;
};

export default Title;
