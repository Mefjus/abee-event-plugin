import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { TextInput, Text, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export const LoginPage = () => {
  const { logIn } = useContext(LoginContext);
  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <View style={styles.container}>
      <Text variant="displayMedium" style={styles.title}>
        Login page
      </Text>
      <View style={styles.box}>
        <TextInput
          label="Username"
          onChangeText={(username) => setUsername(username)}
          returnKeyType="next"
        />
        <TextInput
          label="Password"
          autoCapitalize="none"
          returnKeyType="next"
          secureTextEntry={hidePass ? true : false}
          onChangeText={(password) => setPassword(password)}
          right={
            <TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)} />
          }
        />
        <Button
          mode="contained"
          disabled={!username || !password}
          onPress={() => {
            logIn(username);
          }}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 60,
  },
  box: {
    width: "80%",
    display: "flex",
    gap: 20,
  },
});
