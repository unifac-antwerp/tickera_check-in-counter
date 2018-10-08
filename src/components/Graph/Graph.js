import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import { getChartData } from "../../lib/utils";

const axisValues = {
  domain: ["auto", "auto"],
  type: "number",
  hide: true
};

const Graph = ({ checkIns }) => (
  <ResponsiveContainer width="88%" height={64}>
    <LineChart data={getChartData(checkIns)} margin={{ top: 16 }}>
      <Line
        type="monotone"
        dataKey="checkIns"
        dot={false}
        stroke="#EBF1F1"
        strokeWidth={2}
        isAnimationActive={false}
      />
      <YAxis dataKey="checkIns" {...axisValues} />
      <XAxis dataKey="time" {...axisValues} />
    </LineChart>
  </ResponsiveContainer>
);

Graph.propTypes = {
  checkIns: PropTypes.array.isRequired
};

export default Graph;
