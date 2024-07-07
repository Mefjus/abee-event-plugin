import { useContext } from "react";
import React from "react";
import { Button, Text } from "react-native-paper";
import { View } from "react-native";
import { LoginContext } from "../../context/LoginContext";

export const HomePage = () => {
  const { logOut } = useContext(LoginContext);

  return (
    <View>
      <Button onPress={() => logOut()}>logout</Button>
      <Text>home page</Text>
    </View>
  );
};
