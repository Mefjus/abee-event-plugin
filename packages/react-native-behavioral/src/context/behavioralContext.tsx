import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import { ConfigurationManager, Logger, type Log } from '@mefjus/core';
import { HardwareCollector } from '../collectors/HardwareCollector';
import {
  FingerprintJsProProvider,
  useVisitorData,
} from '@fingerprintjs/fingerprintjs-pro-react-native';

export interface BehavioralContextProps {
  initialize: (userId: string) => void;
  logs: Log[];
}

export const BehavioralContext = createContext<BehavioralContextProps>({
  initialize: () => {},
  logs: [],
});

export const BehavioralProvider: FC<
  PropsWithChildren<{ apiKey: string; logEnable: boolean }>
> = ({ children, apiKey, logEnable = false }) => {
  const [logs, setLogs] = useState<Log[]>([]);
  const loggerRef = useRef(new Logger());

  const initialize: BehavioralContextProps['initialize'] = useCallback(
    (userId) => {
      const config = new ConfigurationManager(userId);
      const hc = new HardwareCollector(loggerRef.current, config);
      (async () => {
        await hc.startCollecting();
      })();
    },
    []
  );

  useEffect(() => {
    if (!logEnable) {
      return;
    }
    const newLog = () => {
      setLogs(loggerRef.current.getLogs());
    };

    loggerRef.current.addNewLogListeners(newLog);
    return () => {
      loggerRef.current.removeNewLogListeners(newLog);
    };
  }, [logEnable]);

  return (
    <BehavioralContext.Provider
      value={{
        initialize,
        logs,
      }}
    >
      <FingerprintJsProProvider apiKey={apiKey} region="eu">
        {children}
      </FingerprintJsProProvider>
    </BehavioralContext.Provider>
  );
};

export const useV = useVisitorData;
