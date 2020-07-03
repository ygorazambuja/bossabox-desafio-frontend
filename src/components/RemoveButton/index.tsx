import React from "react";
import styled from "styled-components";

const RemoveButton: React.FC = () => {
  return <StyledRemoveButton></StyledRemoveButton>;
};

const StyledRemoveButton = styled.button`
  background: #feefee 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
`;

export default RemoveButton;
