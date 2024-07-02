import React from "react";
import { BehavioralProvider } from "react-native-behavioral";
import { LoginProvider } from "./context/LoginContext";
import { Navigator } from "./Navigator";
import { FINGERPRINT_PUBLIC_KEY } from "@env";

export default function App() {
  return (
    <BehavioralProvider apiKey={FINGERPRINT_PUBLIC_KEY}>
      <LoginProvider>
        <Navigator />
      </LoginProvider>
    </BehavioralProvider>
  );
}
