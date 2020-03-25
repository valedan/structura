import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";

const LabelledCard = ({ label, value }) => {
  return (
    <StyledCard elevation={2}>
      <Label>{label}</Label>
      <Value>{value ? value : "--"}</Value>
    </StyledCard>
  );
};

export default LabelledCard;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const Label = styled.span`
  font-size: 0.9em;
  color: ${props => props.theme.palette.text.secondary};
`;

const Value = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 0;
  margin-top: 0.4em;
`;
