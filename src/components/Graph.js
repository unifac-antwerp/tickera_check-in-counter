import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { getChartData } from "../lib/utils";

const Graph = ({ checkIns }) => (
  <LineChart
    width={300}
    height={64}
    data={getChartData(checkIns)}
    margin={{ top: 16 }}
  >
    <Line
      type="monotone"
      dataKey="checkIns"
      dot={false}
      stroke="#EBF1F1"
      strokeWidth={2}
    />
    <YAxis
      dataKey="checkIns"
      domain={["auto", "auto"]}
      type="number"
      hide={true}
    />
    <XAxis dataKey="time" domain={["auto", "auto"]} type="number" hide={true} />
    <Tooltip />
  </LineChart>
);

Graph.propTypes = {
  checkIns: PropTypes.array.isRequired
};

export default Graph;
