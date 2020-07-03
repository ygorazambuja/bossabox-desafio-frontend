import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1.5em 2em;
  justify-content: space-evenly;
`;

export const StyledInput = styled.input`
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  font-size: 20px;
  letter-spacing: 0.4px;
  color: #b1adb9;
  padding: 13px 12px;

  :focus {
    background: #ebeaed 0% 0% no-repeat padding-box;
    border: 1px solid #dedce1;
    outline: none;
    color: #8f8a9b;
  }
`;

export const CheckboxLabel = styled.label`
  font-family: "Source Sans Pro";
  font-weight: bold;
  letter-spacing: 0.2px;
`;
