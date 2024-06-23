import { Collector } from "./collector";
import { ConfigurationManager } from "../configurationManager";

export abstract class HardwareBaseCollector extends Collector {
  constructor(configurationManager: ConfigurationManager) {
    super(configurationManager);
  }
}
