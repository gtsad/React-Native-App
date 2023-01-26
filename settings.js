import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "./header";

export default function Settigns(props) {

 
  return (
    <View style={styles.header}>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
  
    marginTop:70,
    marginLeft:20,
   
    },
  prof: {
    fontSize:45,
    fontFamily:'yolo'
  
  },
  logo: {
    width: 125,
    height: 85,
    borderRadius: 100,
    
  },
  shadow:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
  }
});
