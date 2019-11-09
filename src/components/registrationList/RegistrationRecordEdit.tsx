import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider
} from "@material-ui/core";
import { WeightRecord } from "../../WeightRecord";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from "@material-ui/pickers/";
import DateFnsUtils from "@date-io/date-fns";

interface RegistrationRecordEditProps {
  weightRecord: WeightRecord;
  temproraryEditingRecord: [number?, Date?];
  onChange: (weight?: string, date?: Date) => void;
  onConfirmEdit: (Record: WeightRecord) => void;
  onCancelEdit: () => void;
}

export default ({
  weightRecord,
  onCancelEdit,
  onChange,
  onConfirmEdit,
  temproraryEditingRecord
}: RegistrationRecordEditProps) => (
  <>
      <ListItemText>
        <TextField
          label="Weight"
          id="outlined-start-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="end"> Kg</InputAdornment>
          }}
          onChange={event =>
            onChange(event.target.value, temproraryEditingRecord[1])
          }
          value={temproraryEditingRecord[0]}
          variant="outlined"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDateTimePicker
            style={{marginLeft: "1rem"}}
            format="MM/dd/yyyy, hh:mm a"
            variant="inline"
            margin="none"
            id="date-picker-inline"
            label="Date"
            value={temproraryEditingRecord[1]}
            onChange={newDate =>
              onChange(String(temproraryEditingRecord[0]), newDate)
            }
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="confirm"
          onClick={() =>
            onConfirmEdit({
              id: weightRecord.id,
              weight: temproraryEditingRecord[0],
              registrationDate: temproraryEditingRecord[1]
            })
          }
        >
          <DoneIcon />
        </IconButton>
        <IconButton edge="end" aria-label="cancel" onClick={onCancelEdit}>
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
  </>
);
