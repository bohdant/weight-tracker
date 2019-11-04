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
import { WeightRecord } from "../../stores/weight-store";

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
    <ListItem key={weightRecord.id}>
      <ListItemAvatar>
        <Avatar>
          <SpeedIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${
          weightRecord.weight
        } Kg at ${weightRecord.registrationDate.toLocaleString()}`}
      />
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
    </ListItem>
    <Divider />
  </>
);
