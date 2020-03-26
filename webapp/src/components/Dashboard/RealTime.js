import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import { useTheme } from "@material-ui/core/styles";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const RealTime = () => {
  const [data, setData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("api/random");
      const timestamp = moment().format("h:mm:ssa");
      setData(data =>
        data.concat({ name: timestamp, value: response.data.data })
      );
    };

    //get first data point right away, then every second
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const tickSample = () => {
    // Recharts has a hard time showing a stable x-axis when the data is changing like this,
    // So go with the barebones option for now.
    if (data.length < 2) {
      return [data[0]?.name];
    } else {
      return [data[0].name, data[data.length - 1].name];
    }
  };

  return (
    <Wrapper elevation={2}>
      <ChartLabel>Real-Time Data</ChartLabel>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval="preserveStartEnd"
            ticks={tickSample()}
            tickMargin={10}
          />
          <YAxis />
          {/* Tooltip is not great right now, because it disappears every time the chart re-renders, until the mouse is moved. Probably Recharts is detecting mouse events to show and hide the tooltip, but every second the data changes, so the chart is re-rendered and tooltip defaults to inactive. It might be possible to fix it by providing our own functions to the Tooltip 'active' and 'coordinate' props, and persisting the tooltip state across renders by storing it in parent component state. A simpler option might be to freeze the chart while the mouse is over it.  */}
          <Tooltip isAnimationActive={false} />
          <Area
            isAnimationActive={false}
            dataKey="value"
            stroke={theme.palette.primary.main}
            fill={theme.palette.primary.light}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default RealTime;

const Wrapper = styled(Paper)`
  margin-top: 3rem;
  padding: 0.5rem;
`;

const ChartLabel = styled.h3`
  text-align: center;
  align-self: center;
  margin: 0;
`;
