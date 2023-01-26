import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,Image} from "react-native";
import Header from "./header";
import TabNavigator from "./tabs";
import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Settigns from "./settings";

export default function App() {
  const [count, setCount] = useState(0);
  const [fontsLoaded] = useFonts({
    yolo: require("./assets/fonts/Jost/static/Jost-ExtraBold.ttf"),
    extralight: require("./assets/fonts/Jost/static/Jost-ExtraLight.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const doSomething = (num) => {
    setCount(num);
  };

  var ok='ok'
 


  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();
  /*
     <Header />
      <Breed />
  <Navbar change={doSomething} count={count} />*/

  return (
    <NavigationContainer>
      <StatusBar translucent />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={ {...TransitionPresets.SlideFromRightIOS }}
      >
        <Stack.Screen
          options={{header:()=><Header/>, headerTransparent:true}}
          name="Home"
          component={TabNavigator}
        />
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              fontSize: 40,
            },
          }}
          name="Settings"
          component={Settigns}
        />
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
