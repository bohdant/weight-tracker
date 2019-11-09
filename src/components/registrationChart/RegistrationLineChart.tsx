import React from "react";
import Chart from "react-google-charts";
import WeightRecord from "../../WeightRecord";

export default function registrationLineChart({
  weightRecords
}: {
  weightRecords: WeightRecord[];
}) {

  const chartData = weightRecords.map(item => [
    item.registrationDate,
    item.weight
  ]);

  const data = [
    [{ type: "datetime", label: "Date" }, { type: "number", label: "Weight" }],
    ...chartData
  ];

  return (
    <Chart
      width={"100%"}
      height={"100%"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        hAxis: {
          title: "Date"
        },
        vAxis: {
          title: "Weight"
        },
        series: {
          0: { curveType: "function" }
        },
        legend: "none"
      }}
    />
  );
}

