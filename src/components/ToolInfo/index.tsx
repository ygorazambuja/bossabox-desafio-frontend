import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #123123;
  width: 80%;
  margin: auto;
  height: 283px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  display: flex;
  flex-direction: column;
`;

interface ITool {
  title?: string;
  description?: string;
  link?: string;
  tags?: string[];
}

const ToolInfo: React.FC<ITool> = (props) => {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{props.title}</h1>
        <button>X REMOVE </button>
      </div>

      <h3>{props.description}</h3>
      <div>
        {props.tags?.map((tag) => (
          <span> {tag}</span>
        ))}
      </div>
    </Container>
  );
};

export default ToolInfo;
