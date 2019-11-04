import { WeightStore } from "./weight-store";
import { WeightTrackerUiStore } from "./weight-tracker-ui-store";

export default  {
    weightStore: new WeightStore(),
    uiStore: new WeightTrackerUiStore()
}