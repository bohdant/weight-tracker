import { observable, action, IObservableArray, runInAction } from "mobx";
import uuidGenerator from "../helpers/uuid-generator";
import { WeightRecord } from "../WeightRecord";
import { ITransportService } from "../services/transport-service";

export class WeightStore {
  constructor(private readonly transportationLayer: ITransportService) {
    transportationLayer.list().then(data => this.weightRecords.replace(data));
  }
  @observable
  public weightRecords: IObservableArray<WeightRecord> = observable<
    WeightRecord
  >([]);

  @action.bound
  public async addMeasurement(weight: number, date: Date) {
    const newRecord: WeightRecord = {
      weight,
      registrationDate: date,
      id: uuidGenerator()
    };
    await this.transportationLayer.add(newRecord);
    this.weightRecords.push(newRecord);
  }

  @action.bound
  public async removeMeasurement(id: string) {
    await this.transportationLayer.remove(id);
    const itemForRemoving = this.weightRecords.find(x => x.id === id);
    this.weightRecords.remove(itemForRemoving);
  }

  @action.bound
  public async editMeasurement(newRecord: WeightRecord) {
    await this.transportationLayer.edit(
      newRecord.id,
      newRecord.weight,
      newRecord.registrationDate
    );

    const editingItemIndex = this.weightRecords.findIndex(
      x => x.id === newRecord.id
    );
    this.weightRecords[editingItemIndex] = newRecord;
  }
}
