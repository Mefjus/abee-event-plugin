export type EventBaseType<
  T extends string,
  D extends Record<string, string | number>
> = {
  type: T;
  data: D;
};

export type HardwareTextType = EventBaseType<
  | "deviceName"
  | "macAddress"
  | "model"
  | "manufacturer"
  | "brand"
  | "serialNumber",
  {
    text: string;
  }
>;

export type HardwareNumberType = EventBaseType<
  "batteryLevel" | "freeDiskStorage" | "totalDiskCapacity" | "totalMemory",
  {
    num: number;
  }
>;

export type HardwareType = HardwareTextType | HardwareNumberType;

export type EventType = HardwareType;
