import React from "react";
import StyledAddButton from "../AddButton";
import { Container, StyledInput, CheckboxLabel } from "./styles";

export default function index() {
  return (
    <Container>
      <div>
        <StyledInput type="text" placeholder="Search"></StyledInput>
        <input type="checkbox" />
        <CheckboxLabel htmlFor="">search in tags only</CheckboxLabel>
      </div>
      <StyledAddButton>ADD</StyledAddButton>
    </Container>
  );
}
