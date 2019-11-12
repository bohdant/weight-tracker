import React from "react";
import { observer } from "mobx-react";
import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useStore } from "../../helpers/store-helpers";

export default observer(() => {
  const {
    uiStore: { setAddingState }
  } = useStore();
  return (
    <IconButton
      edge="end"
      aria-label="delete"
      size="medium"
      onClick={setAddingState}
    >
      <AddCircleIcon color="primary" style={{fontSize: "3.5rem"}}/>
    </IconButton>
  );
});
