import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <Wrapper square elevation={2}>
      <Title>Micrograph Explorer</Title>
      <Links>
        <StyledNavLink exact to="/">
          <Button variant="contained" size="small">
            Dashboard
          </Button>
        </StyledNavLink>
        <StyledNavLink to="/viewer">
          <Button variant="contained" size="small">
            Viewer
          </Button>
        </StyledNavLink>
      </Links>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled(Paper)`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.span`
  margin-left: 10%;
  margin-right: 5%;
  font-weight: bold;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 12px;
  text-decoration: none;
  && button span {
    text-transform: none;
  }
  &.active button {
    color: white;
    background: ${props => props.theme.palette.primary.main};
  }
`;
