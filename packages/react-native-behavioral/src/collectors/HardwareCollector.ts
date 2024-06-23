import { HardwareBaseCollector } from '@mefjus/core';

export class HardwareCollector extends HardwareBaseCollector {
  public startCollecting(): void {
    throw new Error('Method not implemented.');
  }

  public getDeviceName() {
    return Promise.resolve('device name ');
  }
}
