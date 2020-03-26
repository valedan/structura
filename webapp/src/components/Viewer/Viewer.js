import React from "react";
import List from "./List";
import Details from "./Details";
import styled from "styled-components";

const Viewer = () => {
  return (
    <Wrapper>
      <List />
      <Details />
    </Wrapper>
  );
};

export default Viewer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
