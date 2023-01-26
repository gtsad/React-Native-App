import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import * as Font from "expo-font";

export default function BreedCard(props) {

  return (
    <View style={[styles.shadow,styles.container]}>
 <TouchableHighlight
      onPress={() => alert(`Hello from ${props.name}!`)}
      style={[styles.card]}
    >
      <View>
        <View style={styles.circle}></View>
        <View style={{ width: 300, height: 300 }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 50,
            }}
            source={props.img}
          ></Image>
        </View>
        <View
          style={{
            zIndex:4,
            position: "absolute",
            bottom: 5,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          <Text allowFontScaling={false} style={[styles.name]}>{props.name} </Text>
          <Text allowFontScaling={false} style={styles.info}> {props.country}</Text>
        
        </View>
      </View>
    </TouchableHighlight>
    </View>
   
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
    fontFamily:'extralight'
  },
  container:{  backgroundColor: "white",
  height: 300,
  width: 300,
  borderRadius: 50,
  marginVertical: 20,},

  card: {
    overflow: "hidden",
    backgroundColor: "white",
    flex:1,
    borderRadius: 50,
   
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  
  },
  name: {
    fontFamily:'yolo',
    zIndex: 3,
    color: "#EC9C00",
    fontSize: 25,
  },

  info: {
    fontFamily:'yolo',
    zIndex: 3,
    fontSize:13,
    color:'white'
  },

  circle: {
    left: -40,

    bottom: -50,
    position: "absolute",
    width: 180,
    height: 130,
    backgroundColor: "black",
    zIndex: 2,
    borderRadius: 30,
    opacity:0.6,
  },
});
