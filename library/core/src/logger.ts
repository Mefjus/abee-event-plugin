export interface Log {
  id: number;
  timestamp: number;
  type: "general" | "hardware";
  data: any;
}

export class Logger {
  private logs: Log[];
  private listeners: ((newLog: Log) => void)[];

  constructor() {
    this.logs = [];
    this.listeners = [];
  }

  public log(type: Log["type"], data: Log["data"]) {
    const log: Log = {
      id: this.logs.length,
      timestamp: Date.now(),
      type,
      data,
    };
    this.logs.unshift(log);
    console.log("logger", log);
    this.listeners.forEach((cb) => cb(log));
  }

  public addNewLogListeners(cb: (newLog: Log) => void) {
    this.listeners.push(cb);
  }

  public removeNewLogListeners(cb: (newLog: Log) => void) {
    const index = this.listeners.indexOf(cb);
    this.listeners.splice(index, 1);
  }

  public getLogs() {
    return this.logs;
  }
}
