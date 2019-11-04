import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider
} from "@material-ui/core";
import { WeightRecord } from "../../stores/weight-store";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

interface RegistrationRecordRemovingProps {
  weightRecord: WeightRecord;
  onRemove: (recordId: string) => void;
  onCancelRemoval: (recordId: string) => void;
}

export default ({
  weightRecord,
  onRemove,
  onCancelRemoval
}: RegistrationRecordRemovingProps) => (
  <>
    <ListItem key={weightRecord.id}>
      <ListItemText>
        <TextField
          error
          fullWidth
          label="Confirmation"
          id="outlined-margin-normal"
          defaultValue={`Are you sure to remove the registration at ${weightRecord.registrationDate.toLocaleDateString()}???`}
          margin="dense"
          variant="outlined"
          disabled={true}
          style={{color:"red"}}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="confirm"
          onClick={() => onRemove(weightRecord.id)}
        >
          <DoneIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="cancel"
          onClick={() => onCancelRemoval(weightRecord.id)}
        >
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider />
  </>
);
