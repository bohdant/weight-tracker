import { WeightRecord } from "../WeightRecord";

export interface ITransportService {
  list(): Promise<WeightRecord[]>;
  add(weightRecord: WeightRecord): Promise<void>;
  remove(id: string): Promise<void>;
  edit(id: string, wegiht: number, date: Date): Promise<void>;
}

export default class LocalStoreTransportRepository
  implements ITransportService {
  list(): Promise<WeightRecord[]> {
    try {
      //TODO: it's better to store all data serialized and associated with one unique key.
      // for simplicity reasons every record's id match localstorage id
      const records = Object.keys(localStorage).map(key =>
        JSON.parse(localStorage[key], (key, value) => {
          let parsedDate: Date;
          if (typeof value === "string") {
            parsedDate = new Date(Date.parse(value));
            if (parsedDate instanceof Date && isFinite(parsedDate as any)) {
              return parsedDate;
            }
          }
          return value;
        })
      );
      return Promise.resolve(records);
    } catch (error) {
      throw new Error("Can't parse objects from local storage");
    }
  }
  add(weightRecord: WeightRecord): Promise<void> {
    if (localStorage[weightRecord.id]) {
      throw new Error(
        `Item with id ${weightRecord.id} already exists in localStorage`
      );
    }
    localStorage[weightRecord.id] = JSON.stringify(weightRecord);
    return Promise.resolve();
  }
  remove(id: string): Promise<void> {
    localStorage.removeItem(id);
    return Promise.resolve();
  }
  edit(id: string, weight: number, date: Date): Promise<void> {
    if (!localStorage[id]) {
      throw new Error(`Item with id ${id} doesn't exists in localStorage`);
    }
    try {
      const editingRecord = JSON.parse(localStorage[id]) as WeightRecord;
      editingRecord.weight = weight;
      editingRecord.registrationDate = date;
      localStorage[id] = JSON.stringify(editingRecord);
      return Promise.resolve();
    } catch (error) {
      throw new Error(`Can't parse object with id ${id} from local storage`);
    }
  }
}
