import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Wrap = styled.div`
  margin-top: 16px;
`;

const Graph = ({ checkIns }) => {
  return (
    <Wrap>
      <LineChart
        width={300}
        height={64}
        data={checkIns.map(c => ({
          ...c,
          checkInTime: moment(c.checkInTime).valueOf()
        }))}
      >
        <Line
          type="monotone"
          dataKey="checkInTime"
          dot={false}
          stroke="#EBF1F1"
          strokeWidth={2}
        />
      </LineChart>
    </Wrap>
  );
};

Graph.propTypes = {
  checkIns: PropTypes.array.isRequired
};

export default Graph;
