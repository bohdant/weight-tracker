import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar,
  Avatar,
  Divider
} from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Speed as SpeedIcon,
  Edit as EditIcon
} from "@material-ui/icons";
import { WeightRecord } from "../../WeightRecord";

interface RegistrationRecordProps {
  weightRecord: WeightRecord;
  onEditRecord: (record: WeightRecord) => void;
  onRemoveRecord: (recordId: string) => void;
}

export default ({
  weightRecord,
  onEditRecord,
  onRemoveRecord
}: RegistrationRecordProps) => (
  <>
    <ListItemAvatar>
      <Avatar>
        <SpeedIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText>{`${
      weightRecord.weight
    } Kg at ${weightRecord.registrationDate.toLocaleString()}`}</ListItemText>
    <ListItemSecondaryAction>
      <IconButton
        edge="end"
        aria-label="edit"
        onClick={() => onEditRecord(weightRecord)}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => onRemoveRecord(weightRecord.id)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </>
);
