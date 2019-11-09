import {
  observable,
  action,
  IObservableArray,
  runInAction,
  computed
} from "mobx";
import uuidGenerator from "../helpers/uuid-generator";
import { WeightRecord } from "../WeightRecord";
import { ITransportService } from "../services/transport-service";
import _ from "lodash";
export class WeightStore {
  constructor(private readonly transportationLayer: ITransportService) {
    transportationLayer.list().then(data => this.weightRecordsInternal.replace(data));
  }

  @observable
  private weightRecordsInternal: IObservableArray<WeightRecord> = observable<
    WeightRecord
  >([]);

  @computed
  get weightRecords() {
    return _.sortBy(this.weightRecordsInternal.slice(), x=>x.registrationDate);
  }

  @action.bound
  public async addMeasurement(weight: number, date: Date) {
    const newRecord: WeightRecord = {
      weight,
      registrationDate: date,
      id: uuidGenerator()
    };
    await this.transportationLayer.add(newRecord);
    this.weightRecordsInternal.push(newRecord);
  }

  @action.bound
  public async removeMeasurement(id: string) {
    await this.transportationLayer.remove(id);
    const itemForRemoving = this.weightRecordsInternal.find(x => x.id === id);
    this.weightRecordsInternal.remove(itemForRemoving);
  }

  @action.bound
  public async editMeasurement(newRecord: WeightRecord) {
    await this.transportationLayer.edit(
      newRecord.id,
      newRecord.weight,
      newRecord.registrationDate
    );

    const editingItemIndex = this.weightRecordsInternal.findIndex(
      x => x.id === newRecord.id
    );
    this.weightRecordsInternal[editingItemIndex] = newRecord;
  }
}
