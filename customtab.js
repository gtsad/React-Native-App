import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={[styles.card, styles.shadow]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
    
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key= {index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.selectedGridItem : styles.gridItem}
          >
            {route.name === "Discover" ? (
              <View style={{ width: 30, height: undefined, aspectRatio: 1 }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                  source= {isFocused?require("./assets/discover.png"):require("./assets/discover1.png")}
                />
              </View>
            ) : route.name === "Tickets" ? (
              <View style={{ width: 30, height: undefined, aspectRatio: 1 }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                  source={isFocused?require("./assets/tickets.png"):require("./assets/tickets1.png")}
                />
              </View>
            ) : route.name === 'Check in' ? (
                <View style={{ width: 30, height: undefined, aspectRatio: 1 }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                  source={isFocused?require("./assets/checkin.png"):require("./assets/checkin1.png")}
                />
              </View>
            ): null}
           
            {isFocused ? (
              <Text
                style={{ marginStart: 5, fontSize:12, fontWeight: "bold", color:'white' }}
              >
                {route.name}
              </Text>
            ) : null }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    position: "absolute",
    alignSelf: "center",
    bottom: 30,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 60,
    width: 315,
    borderRadius: 50,
    padding: 5,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 20,
  
  },
  tinyLogo: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  gridItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
  },
  selectedGridItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 50,
    flex: 1,
    borderRadius: 50,
    backgroundColor: "#132E6B",
  },
  tinyLogo: {
    alignSelf: "center",
    marginEnd: 8,
  },
});
