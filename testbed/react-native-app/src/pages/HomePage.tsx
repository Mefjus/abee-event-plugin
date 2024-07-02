import { useContext, useEffect } from "react";
import { BehavioralContext, useV } from "react-native-behavioral";
import { LoginContext } from "../context/LoginContext";
import React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { TestView } from "./bottomNavigationViews/TestView";
import { LogsView } from "./bottomNavigationViews/LogsView";
import { SettingsView } from "./bottomNavigationViews/SettingsView";

export const HomePage = () => {
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
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
