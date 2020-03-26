import React from "react";
import styled from "styled-components";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import grey from "@material-ui/core/colors/grey";

const ListBody = ({ data, selected, handleSelectRow }) => {
  return (
    <TableBody>
      {data.map(row => {
        return (
          <StyledTableRow
            key={row.uid}
            onClick={() => handleSelectRow(row)}
            className={row.uid === selected?.uid ? "active" : "inactive"}
          >
            <TableCell>{row.uid}</TableCell>
            <TableCell align="right">{row.num_particles}</TableCell>
            <TableCell align="right">
              {row.motion_curvature.toFixed(3)}
            </TableCell>
            <TableCell align="right">{row.ctf_fit_to_A.toFixed(3)}</TableCell>
            <TableCell align="right">{row.df_ast.toFixed(3)}</TableCell>
          </StyledTableRow>
        );
      })}
    </TableBody>
  );
};

export default ListBody;

const StyledTableRow = styled(TableRow)`
  cursor: pointer;
  &&:hover {
    background: ${grey[100]};
  }

  &&.active {
    background: ${props => props.theme.palette.primary.light};
  }
`;
