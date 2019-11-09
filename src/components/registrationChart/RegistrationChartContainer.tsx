import React from "react";
import { useStore } from "../../helpers/store-helpers";
import RegistrationLineChart from "./RegistrationLineChart";
import { observer } from "mobx-react";

export default observer(() => {
  const {
    weightStore: { weightRecords }
  } = useStore();

  return <RegistrationLineChart weightRecords={weightRecords} />;
});
