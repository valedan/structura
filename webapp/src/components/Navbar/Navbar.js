import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper square elevation={3}>
      <Title>Micrograph Explorer</Title>
      <Links>
        <StyledNavLink exact to="/">
          Dashboard
        </StyledNavLink>
        <StyledNavLink to="/viewer">Viewer</StyledNavLink>
      </Links>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled(Paper)`
  width: 100%;
  height: 60px;
`;

const Title = styled.span``;

const Links = styled.div``;

const StyledNavLink = styled(NavLink)`
  &.active {
    background: blue;
  }
`;
