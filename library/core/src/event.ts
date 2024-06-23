export type EventBaseType<
  T extends string,
  D extends Record<string, string>,
> = {
  type: T;
  data: D;
};

export type DeviceNameEvent = EventBaseType<
  "deviceName",
  {
    name: string;
  }
>;

export type EventType = DeviceNameEvent;
