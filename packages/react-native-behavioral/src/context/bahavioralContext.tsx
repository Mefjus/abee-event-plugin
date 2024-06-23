import React, { createContext, useState, type ReactNode } from 'react';
import { ConfigurationManager } from '@mefjus/core';
import { HardwareCollector } from '../collectors/HardwareCollector';

export interface BehavioralContextProps {
  initialize: (userId: string) => void;
  debug: string;
}

export const BehavioralContext = createContext<BehavioralContextProps>({
  initialize: () => {},
  debug: 'none',
});

export const BehavioralProvider = ({ children }: { children: ReactNode }) => {
  const [debug, setDebug] = useState('none');

  const initialize: BehavioralContextProps['initialize'] = (userId) => {
    const config = new ConfigurationManager(userId);
    const hc = new HardwareCollector(config);
    hc.getDeviceName().then(setDebug);
  };

  return (
    <BehavioralContext.Provider
      value={{
        initialize,
        debug,
      }}
    >
      {children}
    </BehavioralContext.Provider>
  );
};
