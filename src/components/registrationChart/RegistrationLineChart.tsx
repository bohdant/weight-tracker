import { observer } from "mobx-react";
import React from "react";
import Chart from "react-google-charts";
import { useStore } from "../../helpers/store-helpers";

export function registrationLineChart() {
  const { weightStore } = useStore();
  const { weightRecords } = weightStore;

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

export default observer(registrationLineChart);
