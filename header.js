import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Header(props) {
  var navigation = useNavigation();

  

  return (
    <View style={[styles.header, /*props.scr > 40 && */styles.shadow]}>
      <View style={{ marginRight: "auto" }}>
        <Image
          style={styles.prof}
          source={require("./assets/profilepic.jpeg")}
        />
      </View>
      <View style={styles.settings}>
        <Image style={styles.logo} source={require("./assets/logonew.png")} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
        style={{ marginLeft: "auto" }}
      >
        <Image
          style={styles.prof}
          source={require("./assets/settingsicon.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
       flexDirection: "row",
    width: "100%",
    paddingTop: 35,
    paddingHorizontal: 60,
    alignItems: "center",
    zIndex: 2,
    backgroundColor: "white",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,

  
  },
  prof: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  shadow: {shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  
  elevation: 3,
} });
