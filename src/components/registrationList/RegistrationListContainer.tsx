import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../helpers/store-helpers";
import RegistrationRecordEdit from "./RegistrationRecordEdit";
import RegistrationRecordRemoving from "./RegistrationRecordRemoving";
import RegistrationListRecordNew from "./RegistrationListRecordNew";
import RegistrationRecord from "./RegistrationRecord";
import {
  List,
  ListItem,
  Divider,
  ListItemSecondaryAction,
  IconButton,
  ListItemText
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export default observer(() => {
  const { weightStore, uiStore } = useStore();
  const {
    isAdding,
    isEditing,
    isRemoving,
    editingId,
    removingId,
    resetAdding,
    resetEditing,
    resetRemoving,
    setAddingState,
    setEditingState,
    setRemovingState,
    changeEditingItem,
    temproraryEditingRecord
  } = uiStore;
  const { removeMeasurement, editMeasurement, addMeasurement } = weightStore;
  const weightRecordsSorted = weightStore.weightRecords.slice().sort();
  return (
    <List>
      {weightRecordsSorted.map(record => {
        if (isEditing && editingId === record.id) {
          return (
            <RegistrationRecordEdit
              weightRecord={record}
              temproraryEditingRecord={temproraryEditingRecord}
              onCancelEdit={resetEditing}
              onChange={(weight, date) => changeEditingItem(weight, date)}
              onConfirmEdit={record => {
                editMeasurement(record);
                resetEditing();
              }}
            />
          );
        }
        if (isRemoving && removingId === record.id) {
          return (
            <RegistrationRecordRemoving
              weightRecord={record}
              onCancelRemoval={resetRemoving}
              onRemove={recordId => {
                removeMeasurement(recordId);
                resetRemoving();
              }}
            />
          );
        }
        return (
          <RegistrationRecord
            weightRecord={record}
            onRemoveRecord={setRemovingState}
            onEditRecord={setEditingState}
          />
        );
      })}
      {isAdding && (
        <RegistrationListRecordNew
          weightRecord={{
            id: "",
            registrationDate: new Date(),
            weight: 0
          }}
          temproraryEditingRecord={temproraryEditingRecord}
          onCancelAdding={resetAdding}
          onChange={(weight, date) => changeEditingItem(weight, date)}
          onConfirmAdding={(weight, date) => {
            addMeasurement(Number(weight), date);
            resetAdding();
          }}
        />
      )}
      <ListItem key="addNew" style={{ height: "3rem" }}>
        <ListItemText primary={" "}></ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            size="medium"
            onClick={setAddingState}
          >
            <AddCircleIcon color="primary" fontSize="large" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
});
