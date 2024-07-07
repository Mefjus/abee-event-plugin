import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { BehavioralContext, type Log } from "react-native-behavioral";
import { Text } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";

export const LogsView = () => {
  const { logs } = useContext(BehavioralContext);
  const [category, setCategory] = useState<Log["type"] | "all">("all");

  return (
    <>
      <View style={styles.container}>
        <RNPickerSelect
          value={category}
          items={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "general",
              label: "General",
            },
            {
              value: "hardware",
              label: "Hardware",
            },
          ]}
          onValueChange={(v) => setCategory(v as Log["type"] | "all")}
        />
        <ScrollView>
          {logs
            .filter(({ type }) =>
              category === "all" ? true : category === type
            )
            .map(({ data, timestamp, id, type }) => (
              <View key={id} style={[styles.item, styles[type]]}>
                <View style={styles.upper}>
                  <Text>ID: {id}</Text>
                  <Text>{new Date(timestamp).toLocaleTimeString()}</Text>
                </View>
                <Text>
                  {typeof data === "string" ? data : JSON.stringify(data)}
                </Text>
              </View>
            ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 10,
    backgroundColor: "#DCDCDC",
    borderBottomWidth: 1,
  },
  general: {
    backgroundColor: "white",
  },
  hardware: {
    backgroundColor: "#50C878",
  },
  upper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
