import React, { useState } from "react";
import List from "./List";
import Details from "./Details";
import styled from "styled-components";

const Viewer = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Wrapper>
      <List setSelected={setSelected} selected={selected} />
      <Details selected={selected} />
    </Wrapper>
  );
};

export default Viewer;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 1290px) {
    width: 100%;
  }
`;
