import { useContext } from "react";
import { LoginContext } from "./context/LoginContext";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { Button } from "react-native-paper";
const Stack = createStackNavigator();

export const Navigator = () => {
  const { isLogin, logOut } = useContext(LoginContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{
                headerRight: () => (
                  <Button onPress={() => logOut()}>logout</Button>
                ),
              }}
            />
          </>
        ) : (
          <Stack.Screen name="Login page" component={LoginPage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
