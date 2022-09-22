import React from "react";
import LoginPage from "./src/LoginPage";
import SignUpPage from "./src/SignUpPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = 'LoginPage' component={LoginPage} options={{header: () => null}} />
      <Stack.Screen name = 'SignUpPage' component={SignUpPage} options={{header: () => null}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

