import { WeightStore } from "./weight-store";
import { WeightTrackerUiStore } from "./weight-tracker-ui-store";
import LocalStoreTransportRepository from "../services/transport-service";

export default  {
    weightStore: new WeightStore(new LocalStoreTransportRepository()),
    uiStore: new WeightTrackerUiStore()
}