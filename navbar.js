import { StyleSheet, View, Text, Image ,TouchableOpacity} from "react-native";
import React, { useState, useEffect } from "react";


export default function Navbar({ navigation, ...props }) {
 var count= props.count
 var change=props.change;

 function onHnade(num) {
  change(num)
  navigation.navigate('Profile', {name: 'Jane'})
  



 }




 
 
  return (
    <View style={[styles.card, styles.elevation]}>
     <TouchableOpacity   style={count === 0 ? styles.selectedGridItem : styles.gridItem} onPress={()=>props.change(0)}>
        <View style={{ width: 30, height: undefined, aspectRatio: 1 }}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={require("./assets/walk.png")}
          />
        </View>
        <Text style={count===0 ?{marginStart:8, fontWeight:'bold',opacity:0.55}:{display:"none"}}>Walk</Text>
      </TouchableOpacity>
      <TouchableOpacity   style={count === 1 ? styles.selectedGridItem : styles.gridItem} onPress={()=>change(1)}>
        <View style={{ width: 30, height: undefined, aspectRatio: 1 }}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={require("./assets/meet.png")}
          />
        </View>
        <Text style={count===1 ?{marginStart:8, fontWeight:'bold',opacity:0.55}:{display:"none"}}>Breed</Text>
      </TouchableOpacity>
      <TouchableOpacity   style={count === 2 ? styles.selectedGridItem : styles.gridItem} onPress={()=>onHnade(2)}>
        <View style={{ width: 30, height: undefined, aspectRatio: 1 }}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={require("./assets/home.png")}
          />
        </View>
        <Text style={count===2 ?{marginStart:8, fontWeight:'bold',opacity:0.55}:{display:"none"}}>Keep</Text>
      </TouchableOpacity>
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
    position:'absolute',
    alignSelf:'center',
    bottom:30,
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
  elevation: {
    elevation: 20,
    shadowColor: "#000",
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
    height:50,
    flex: 1,
    borderRadius:50,
    backgroundColor: "#FFCC6A",
  },
  tinyLogo: {
    alignSelf: "center",
    marginEnd: 8,
  },
});
