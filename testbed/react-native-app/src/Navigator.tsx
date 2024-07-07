import { useContext } from "react";
import { LoginContext } from "./context/LoginContext";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "./pages/testApp/HomePage";
import { Button } from "react-native-paper";
import { LoginPage } from "./pages/testApp/LoginPage";
// const Stack = createStackNavigator();

export const Navigator = () => {
  const { isLogin, logOut } = useContext(LoginContext);

  if (!isLogin) {
    return <LoginPage />;
  }

  return <HomePage />;

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       {isLogin ? (
  //         <>
  //           <Stack.Screen
  //             name="Home"
  //             component={HomePage}
  //             options={{
  //               headerRight: () => (
  //                 <Button onPress={() => logOut()}>logout</Button>
  //               ),
  //             }}
  //           />
  //         </>
  //       ) : (
  //         <Stack.Screen name="Login page" component={LoginPage} />
  //       )}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};
