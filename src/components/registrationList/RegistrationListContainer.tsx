import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../helpers/store-helpers";
import RegistrationRecordEdit from "./RegistrationRecordEdit";
import RegistrationRecordRemoving from "./RegistrationRecordRemoving";
import RegistrationListRecordNew from "./RegistrationListRecordNew";
import RegistrationRecord from "./RegistrationRecord";
import { List, ListItem, Divider } from "@material-ui/core";

export default observer(() => {
  const { weightStore, uiStore } = useStore();
  const {
    isAdding,
    editingId,
    removingId,
    resetAdding,
    resetEditing,
    resetRemoving,
    setEditingState,
    setRemovingState,
    changeEditingItem,
    temproraryEditingRecord
  } = uiStore;
  const {
    removeMeasurement,
    editMeasurement,
    addMeasurement,
    weightRecords
  } = weightStore;
  return (
    <List>
      {weightRecords.map(record => (
        <>
          <ListItem key={record.id} button>
            {editingId === record.id && (
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
            )}
            {removingId === record.id && (
              <RegistrationRecordRemoving
                weightRecord={record}
                onCancelRemoval={resetRemoving}
                onRemove={recordId => {
                  removeMeasurement(recordId);
                  resetRemoving();
                }}
              />
            )}
            {removingId !== record.id && editingId !== record.id && (
              <RegistrationRecord
                weightRecord={record}
                onRemoveRecord={setRemovingState}
                onEditRecord={setEditingState}
              />
            )}
          </ListItem>
          <Divider />
        </>
      ))}
      {isAdding && (
        <ListItem key="new">
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
        </ListItem>
      )}
    </List>
  );
});
