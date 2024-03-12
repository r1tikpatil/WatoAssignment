import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";

import SignIn from "./src/screens/SignIn/index";
import SignUp from "./src/screens/SignUp/index";
import WelcomeScreen from "./src/screens/OnBoardingScreen/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const navigatorOptions = {
  headerShown: false,
};

export default function App() {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Inter-SemiBold": require("./fonts/Inter-SemiBold.ttf"),
        "Inter-ExtraBold": require("./fonts/Inter-ExtraBold.ttf"),
        "Inter-Light": require("./fonts/Inter-Light.ttf"),
        "Inter-Medium": require("./fonts/Inter-Medium.ttf"),
        "Inter-Regular": require("./fonts/Inter-Regular.ttf"),
        "Inter-Bold": require("./fonts/Inter-Bold.ttf"),
        "Inter-Black": require("./fonts/Inter-Black.ttf"),
        "GtSuper-Regular": require("./fonts/GT-Super-Display-Light-Trial.otf"),
      });
    };
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator mode="modal" screenOptions={navigatorOptions}>
        <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="signIn" component={SignIn} />
        <Stack.Screen name="signUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
