import React, {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import { BehavioralContext } from "react-native-behavioral";

export const LoginContext = createContext({
  userName: "",
  isLogin: false,
  logIn: (userName: string) => {},
  logOut: () => {},
});

export const LoginProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userName, setUserName] = useState<string>();
  const { initialize } = useContext(BehavioralContext);
  return (
    <LoginContext.Provider
      value={{
        isLogin: !!userName,
        logIn: (userName) => {
          setUserName(userName), initialize(userName);
        },
        logOut: () => setUserName(undefined),
        userName: userName ?? "",
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
