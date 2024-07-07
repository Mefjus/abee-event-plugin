import React from "react";
import { BehavioralProvider } from "react-native-behavioral";
import { FINGERPRINT_PUBLIC_KEY } from "@env";
import { BottomNavigation } from "react-native-paper";
import { TestView } from "./pages/bottomNavigationViews/TestView";
import { LogsView } from "./pages/bottomNavigationViews/LogsView";
import { SettingsView } from "./pages/bottomNavigationViews/SettingsView";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: "testView",
      title: "Test",
      focusedIcon: "test-tube",
      unfocusedIcon: "test-tube-empty",
    },
    {
      key: "logsView",
      title: "Logs",
      focusedIcon: "clipboard-text",
      unfocusedIcon: "clipboard-text-outline",
    },
    {
      key: "settingsView",
      title: "Settings",
      focusedIcon: "cog",
      unfocusedIcon: "cog-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    testView: TestView,
    logsView: LogsView,
    settingsView: SettingsView,
  });

  return (
    <SafeAreaProvider>
      <BehavioralProvider apiKey={FINGERPRINT_PUBLIC_KEY} logEnable>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </BehavioralProvider>
    </SafeAreaProvider>
  );
}
