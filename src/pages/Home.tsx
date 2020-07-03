import React from "react";
import SearchInput from "../components/SeachInput";
import Title from "../components/Title";
import ToolInfo from "../components/ToolInfo";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1.5em;
`;

export default function Home() {
  const tagArray = ["dasda", "dasda", "dasda", "asdasd"];
  return (
    <Container>
      <Container>
        <Title size={40}>Vuttr</Title>
      </Container>
      <Container>
        <Title size={20}>Very Useful Tools to Remember</Title>
      </Container>

      <SearchInput></SearchInput>
      <ToolInfo
        title="Notion"
        description="All in one tool to organize teams and ideas. Write, plan, collaborate and get organized."
        tags={tagArray}
      ></ToolInfo>
    </Container>
  );
}
