import styled, { css } from "styled-components";
import { ITitle } from "./index";

export const StyledTitle = styled.span<ITitle>`
  ${({ size }) =>
    css`
      font-size: ${size}px;
      font-family: "Source Sans Pro";
    `}
`;
