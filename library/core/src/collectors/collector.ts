import { ConfigurationManager } from "../configurationManager";

export abstract class Collector {
  private configurationManager: ConfigurationManager;

  constructor(configurationManager: ConfigurationManager) {
    this.configurationManager = configurationManager;
  }

  test() {
    console.log(this.configurationManager.userId);
  }

  public abstract startCollecting(): void;
}
