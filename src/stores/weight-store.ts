import { observable, action } from "mobx";
import uuidGenerator from "../helpers/uuid-generator";

export class WeightRecord {
  id: string;
  @observable weight: number;
  @observable registrationDate: Date;
}

export class WeightStore {
  public readonly weightRecords = observable<WeightRecord>([
    {
      id: "ksk1",
      weight: 90,
      registrationDate: new Date(2014, 10, 15, 0, 30)
    },
    {
      id: "ksks2",
      weight: 40,
      registrationDate: new Date(2015, 10, 15, 0, 30)
    },
    {
      id: "ksk3s",
      weight: 50,
      registrationDate: new Date(2016, 10, 15, 0, 30)
    }
  ]);

  @action.bound
  public addMeasurement(weight: number, date: Date) {
    this.weightRecords.push({
      weight,
      registrationDate: date,
      id: uuidGenerator()
    });
  }

  @action.bound
  public removeMeasurement(id: string) {
    const itemForRemoving = this.weightRecords.find(x => x.id === id);
    this.weightRecords.remove(itemForRemoving);
  }

  @action.bound
  public editMeasurement(newRecord: WeightRecord) {
    const itemForEditing = this.weightRecords.find(x => x.id === newRecord.id);
    itemForEditing.weight = newRecord.weight;
    itemForEditing.registrationDate = newRecord.registrationDate;
  }
}
