import { observable, action } from "mobx";
import { WeightRecord } from "../WeightRecord";

export class WeightTrackerUiStore {
  @observable editingId: string = null;
  @observable removingId: string = null;
  @observable isAdding: boolean = false;
  @observable temproraryEditingRecord: [number?, Date?] = [];
  @observable selectedRecord: WeightRecord = null;

  @action.bound
  setEditingState(record: WeightRecord) {
    this.changeEditingItem(record.weight, record.registrationDate);
    this.editingId = record.id;
  }

  @action.bound
  changeEditingItem(weight?: string | number, date?: Date) {
    let weightNumber = Number(weight);
    if (isNaN(weightNumber)) {
      weightNumber = undefined;
    }
    this.temproraryEditingRecord = [weightNumber, date];
  }

  @action.bound
  resetEditing() {
    this.temproraryEditingRecord = [];
    this.editingId = null;
  }

  @action.bound
  setRemovingState(recordId: string) {
    this.removingId = recordId;
  }

  @action.bound
  resetRemoving() {
    this.removingId = null;
  }

  @action.bound
  setAddingState() {
    this.temproraryEditingRecord = [0, new Date()];
    this.editingId = null;
    this.removingId = null;
    this.isAdding = true;
  }

  @action.bound
  resetAdding() {
    this.temproraryEditingRecord = [];
    this.isAdding = false;
  }
}
