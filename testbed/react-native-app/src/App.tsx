import React, { useContext, useEffect, useState } from "react";

import { StyleSheet, View, Text } from "react-native";
import {
  BehavioralProvider,
  BehavioralContext,
  useV,
} from "react-native-behavioral";

export default function App() {
  return (
    <View style={styles.container}>
      <BehavioralProvider>
        <Test />
      </BehavioralProvider>
    </View>
  );
}

const Test = () => {
  const { initialize, debug } = useContext(BehavioralContext);
  const { error, isLoading, getData } = useV();

  useEffect(() => {
    initialize("userId");
    getData();
  }, []);

  return (
    <>
      <Text>is loading: {isLoading ? "loading" : "not loading"}</Text>
      <Text>error: {error?.message}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
