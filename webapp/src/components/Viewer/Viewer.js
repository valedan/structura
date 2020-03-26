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
  display: flex;
  flex-direction: row;
`;
