import React, {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

export const LoginContext = createContext({
  userName: "",
  isLogin: false,
  logIn: (userName: string) => {},
  logOut: () => {},
});

export const LoginProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userName, setUserName] = useState<string>();

  return (
    <LoginContext.Provider
      value={{
        isLogin: !!userName,
        logIn: (userName) => setUserName(userName),
        logOut: () => setUserName(undefined),
        userName: userName ?? "",
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
