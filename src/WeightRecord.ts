import { observable } from "mobx";
export class WeightRecord {
  @observable
  id: string;
  @observable
  weight: number;
  @observable
  registrationDate: Date;
}

export default WeightRecord;