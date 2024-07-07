import { Collector } from "./collector";
import { ConfigurationManager } from "../configurationManager";
import { type HardwareNumberType, type HardwareTextType } from "../event";
import { Logger } from "../logger";

export abstract class HardwareBaseCollector extends Collector {
  constructor(logger: Logger, configurationManager: ConfigurationManager) {
    super("hardware", logger, configurationManager);
    this.collectOnceList = [
      {
        collectFunc: this.handleTextCollectorFunc(
          "deviceName",
          this.getDeviceName()
        ),
      },
      {
        collectFunc: this.handleTextCollectorFunc("brand", this.getBrand()),
      },
      {
        collectFunc: this.handleTextCollectorFunc(
          "macAddress",
          this.getMacAddress()
        ),
      },
      {
        collectFunc: this.handleTextCollectorFunc(
          "manufacturer",
          this.getManufacture()
        ),
      },
      {
        collectFunc: this.handleTextCollectorFunc("model", this.getModel()),
      },
      {
        collectFunc: this.handleTextCollectorFunc(
          "serialNumber",
          this.getSerialNumber()
        ),
      },
      {
        collectFunc: this.handleNumberCollectorFunc(
          "batteryLevel",
          this.getBatteryLevel()
        ),
      },
      {
        collectFunc: this.handleNumberCollectorFunc(
          "freeDiskStorage",
          this.getFreeDiskStorage()
        ),
      },
      {
        collectFunc: this.handleNumberCollectorFunc(
          "totalDiskCapacity",
          this.getTotalDiskCapacity()
        ),
      },
      {
        collectFunc: this.handleNumberCollectorFunc(
          "totalMemory",
          this.getTotalMemory()
        ),
      },
    ];
  }

  private handleTextCollectorFunc<T extends HardwareTextType>(
    type: T["type"],
    collectorFunc: Promise<string> | null
  ): Promise<T> | null {
    if (collectorFunc) {
      return collectorFunc.then(
        (d) =>
          ({
            type,
            data: {
              text: d,
            },
          } as T)
      );
    }
    return null;
  }

  private handleNumberCollectorFunc<T extends HardwareNumberType>(
    type: T["type"],
    collectorFunc: Promise<number> | null
  ): Promise<T> | null {
    if (collectorFunc) {
      return collectorFunc.then(
        (d) =>
          ({
            type,
            data: {
              num: d,
            },
          } as T)
      );
    }
    return null;
  }

  abstract getDeviceName(): Promise<string> | null;
  abstract getMacAddress(): Promise<string> | null;
  abstract getModel(): Promise<string> | null;
  abstract getManufacture(): Promise<string> | null;
  abstract getBrand(): Promise<string> | null;
  abstract getSerialNumber(): Promise<string> | null;
  abstract getBatteryLevel(): Promise<number> | null;
  abstract getFreeDiskStorage(): Promise<number> | null;
  abstract getTotalDiskCapacity(): Promise<number> | null;
  abstract getTotalMemory(): Promise<number> | null;
}
