import React from "react";
import { LoginProvider } from "../../context/LoginContext";
import { Navigator } from "../../Navigator";

export const TestView = () => {
  return (
    <LoginProvider>
      <Navigator />
    </LoginProvider>
  );
};
