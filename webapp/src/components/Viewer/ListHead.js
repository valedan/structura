import React from "react";
import styled from "styled-components";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const ListHead = ({ sortDirection, sortBy, onRequestSort }) => {
  const headCells = [
    { label: "UID", id: "uid" },
    { label: "Number of Picks", id: "num_particles" },
    { label: "Motion Curvature", id: "motion_curvature" },
    { label: "CTF Fit to Å", id: "ctf_fit_to_A" },
    { label: "Astigmatism", id: "df_ast" }
  ];

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            align="right"
            padding="none"
            key={headCell.id}
            sortDirection={sortBy === headCell.id ? sortDirection : false}
          >
            <TableSortLabel
              active={sortBy === headCell.id}
              direction={sortBy === headCell.id ? sortDirection : "desc"}
              onClick={event => onRequestSort(event, headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ListHead;
