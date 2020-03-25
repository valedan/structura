import React from "react";
import styled from "styled-components";
import Averages from "./Averages";
import RealTime from "./RealTime";

const Dashboard = () => {
  return (
    <Wrapper>
      <Averages />
      <RealTime />
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div``;
