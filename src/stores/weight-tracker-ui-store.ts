import { observable, action } from "mobx";
import { WeightRecord } from "../WeightRecord";

export class WeightTrackerUiStore{
    @observable isEditing: boolean = false;
    @observable editingId: string;
    @observable isRemoving: boolean = false;
    @observable removingId: string;
    @observable isAdding: boolean = false;
    @observable temproraryEditingRecord: [number?, Date?] = [];

    @action.bound
    setEditingState(record: WeightRecord){
        this.changeEditingItem(record.weight, record.registrationDate);
        this.editingId = record.id;
        this.isEditing = true;
    }

    @action.bound
    changeEditingItem(weight?: string | number, date?: Date){
        let weightNumber = Number(weight);
        if(isNaN(weightNumber)){
            weightNumber = undefined;
        }
        this.temproraryEditingRecord = [weightNumber, date]
    }

    @action.bound
    resetEditing(){
        this.temproraryEditingRecord = [];
        this.editingId = null;  
        this.isEditing = false;
    }

    @action.bound
    setRemovingState(recordId: string){
        this.removingId = recordId;
        this.isRemoving = true;
    }

    @action.bound
    resetRemoving(){
        this.removingId = null;
        this.isRemoving = false;
    }

    @action.bound
    setAddingState(){
        this.temproraryEditingRecord = [0, new Date()];
        this.isRemoving = false;
        this.isEditing = false;
        this.isAdding = true;
    }

    @action.bound
    resetAdding(){
        this.temproraryEditingRecord = [];
        this.isAdding = false;
    }

}