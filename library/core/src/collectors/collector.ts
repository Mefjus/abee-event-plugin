import { ConfigurationManager } from "../configurationManager";
import { type HardwareType } from "../event";
import { Logger } from "../logger";

type CollectOnceItemType = {
  collectFunc: Promise<HardwareType> | null;
};

type CollectorType = "hardware";

export abstract class Collector {
  private configurationManager: ConfigurationManager;
  public collectOnceList: CollectOnceItemType[] = [];
  private logger: Logger;
  private collectorType: CollectorType;

  constructor(
    collectorType: CollectorType,
    logger: Logger,
    configurationManager: ConfigurationManager
  ) {
    this.configurationManager = configurationManager;
    this.logger = logger;
    this.collectorType = collectorType;
  }

  test() {
    console.log(this.configurationManager.userId);
  }

  public async startCollecting() {
    this.logger.log("general", "start collecting");
    (
      await Promise.all(
        this.collectOnceList.map(({ collectFunc }) => collectFunc)
      )
    ).map((characteristic) => {
      this.logger.log(this.collectorType, characteristic);
    });
  }
}
