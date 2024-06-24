import React, {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import { ConfigurationManager } from '@mefjus/core';
import { HardwareCollector } from '../collectors/HardwareCollector';
import { FingerprintJsProProvider } from '@fingerprintjs/fingerprintjs-pro-react-native';

export interface BehavioralContextProps {
  initialize: (userId: string) => void;
  debug: string;
}

export const BehavioralContext = createContext<BehavioralContextProps>({
  initialize: () => {},
  debug: 'none',
});

export const BehavioralProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
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
      <FingerprintJsProProvider apiKey="test">
        {children}
      </FingerprintJsProProvider>
    </BehavioralContext.Provider>
  );
};
