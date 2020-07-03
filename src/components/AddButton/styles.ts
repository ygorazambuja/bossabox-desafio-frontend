import styled from "styled-components";

export const StyledAddButton = styled.button`
  font-family: "Source Sans Pro";
  border: none;
  outline: none;

  padding: 6px 18px 6px 18px;
  background-color: #333;
  letter-spacing: 0.36px;
  color: #ffffff;
  background: #0dcb7d 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;

  :hover {
    background: #10b26c 0% 0% no-repeat padding-box;
  }
  :active {
    background: #0e995d 0% 0% no-repeat padding-box;
  }
  :focus {
    outline: none;
  }
`;
