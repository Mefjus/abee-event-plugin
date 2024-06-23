import React, { useContext, useEffect } from "react";

import { StyleSheet, View, Text } from "react-native";
import { BehavioralProvider, BehavioralContext } from "react-native-behavioral";

const Test = () => {
  const { initialize, debug } = useContext(BehavioralContext);

  useEffect(() => {
    initialize("userId");
  }, []);

  return <Text>{debug}</Text>;
};

export default function App() {
  return (
    <BehavioralProvider>
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <Test />
      </View>
    </BehavioralProvider>
  );
}

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
