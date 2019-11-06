import React from "react";
import { Divider } from "@material-ui/core";
import { WeightRecord } from "../../WeightRecord";
import RegistrationRecordEdit from "./RegistrationRecordEdit";

interface RegistrationRecordEditProps {
  weightRecord: WeightRecord;
  temproraryEditingRecord: [number?, Date?];
  onChange: (weight?: string, date?: Date) => void;
  onConfirmAdding: (weight?: string | number, date?: Date) => void;
  onCancelAdding: () => void;
}

export default ({
  weightRecord,
  onCancelAdding,
  onChange,
  onConfirmAdding,
  temproraryEditingRecord
}: RegistrationRecordEditProps) => (
  <>
    <RegistrationRecordEdit
      weightRecord={weightRecord}
      onCancelEdit={onCancelAdding}
      onChange={onChange}
      onConfirmEdit={record =>
        onConfirmAdding(record.weight, record.registrationDate)
      }
      temproraryEditingRecord={temproraryEditingRecord}
    />
  </>
);
