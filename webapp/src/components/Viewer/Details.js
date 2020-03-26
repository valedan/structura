import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

const Details = ({ selected }) => {
  return (
    <Wrapper elevation={2}>
      <Title>{selected ? `Micrograph ${selected.uid}` : "Loading..."}</Title>
      {selected && (
        <StatsTable size="small" padding="none">
          <TableBody>
            <TableRow>
              <TableCell>Number of Picks:</TableCell>
              <TableCell>{selected.num_particles}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Motion Curvature:</TableCell>
              <TableCell>{selected.motion_curvature.toFixed(3)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Motion:</TableCell>
              <TableCell>{selected.motion_total_pix.toFixed(3)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pick Power Median:</TableCell>
              <TableCell>{selected.pick_pow_median.toFixed(3)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pick NCC Median:</TableCell>
              <TableCell>{selected.pick_ncc_median.toFixed(3)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CTF Fit to Å:</TableCell>
              <TableCell>{selected.ctf_fit_to_A.toFixed(3)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Defocus:</TableCell>
              <TableCell>{selected.df_avg.toFixed(3)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Astigmatism:</TableCell>
              <TableCell>{selected.df_ast.toFixed(3)}</TableCell>
            </TableRow>
          </TableBody>
        </StatsTable>
      )}
      {selected && <Image src={`api/image?filename=${selected.fname}`}></Image>}
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 2rem;
  height: calc(100vh - 60px - 4rem);
`;

const Title = styled.h1`
  text-align: center;
`;

const StatsTable = styled(Table)`
  && {
    width: 260px;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    .MuiTableCell-root {
      border-bottom: none;
    }
  }
`;

const Image = styled.img`
  max-width: 94%;
  height: auto;
  max-height: calc(100% - 300px);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
