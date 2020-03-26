import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ListHead from "./ListHead";
import ListBody from "./ListBody";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import InfiniteScroll from "react-infinite-scroll-component";

const List = ({ selected, setSelected }) => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortBy, setSortBy] = useState("uid");
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("api/query", {
      params: {
        skip: data.length,
        limit: 25,
        sortBy,
        desc: sortDirection === "desc"
      }
    });
    setData(data => data.concat(response.data.data));
    if (selected === null) {
      setSelected(response.data.data[0]);
    }
  };

  useEffect(() => {
    // InfiniteScroll is unreliable about loading data when the list is empty, so we handle it manually
    if (data.length == 0) {
      loadData();
    }
  }, [data]);

  const handleRequestSort = (_, property) => {
    const isDesc = sortBy === property && sortDirection === "desc";
    setSortDirection(isDesc ? "asc" : "desc");
    setSortBy(property);
    setSelected(null);
    setData([]);
  };

  const handleSelectRow = row => {
    setSelected(row);
  };

  return (
    <Wrapper elevation={2}>
      {/* This is a little hacky, but we need to put the head in a seperate table to simulate a sticky header, because infinite scroll needs to wrap a table, it can't wrap a tbody. */}
      <Table size="small">
        <ListHead
          sortDirection={sortDirection}
          sortBy={sortBy}
          onRequestSort={handleRequestSort}
        />
      </Table>
      <ScrollContainer id="scroll-container">
        <InfiniteScroll
          dataLength={data.length}
          next={loadData}
          // Prevent trying to load data when it's already being handled by useEffect above
          hasMore={data.length > 0}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scroll-container"
        >
          <Table size="small">
            <ListBody
              data={data}
              selected={selected}
              handleSelectRow={handleSelectRow}
            />
          </Table>
        </InfiniteScroll>
      </ScrollContainer>
    </Wrapper>
  );
};

export default List;

const Wrapper = styled(Paper)`
  width: 50%;
  min-width: 620px;
  && th {
    padding: 8px;
  }
`;

const ScrollContainer = styled(TableContainer)`
  /* 60px navbar, 40px table header and 2rem gutters top and bottom */
  height: calc(100vh - 60px - 40px - 4rem);
  overflow-y: scroll;
`;
