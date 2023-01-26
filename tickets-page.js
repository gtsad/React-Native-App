import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useRef, useFocusEffect } from "react";
import BreedCard from "./floating-card";
import * as Font from "expo-font";
import Header from "./header";
import { useScrollToTop } from "@react-navigation/native";
import towns from "./discovery-towns";

export default function Tickets() {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  const onTop = () => {
    ref.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_OFFSET_THRESHOLD = 300;
  return (
    <View style={styles.main}>
       
      <ScrollView
      scrollEventThrottle={10}
        ref={ref}
        contentContainerStyle={{ alignItems: "center" }}
        style={{ width: "100%" }}
        onScroll={(event) => {
          setContentVerticalOffset(event.nativeEvent.contentOffset.y);
        }}
      >
       
        <Text style={{ fontSize: 24, marginTop: 160,  fontFamily:'extralight' }}>
          {" "}
          Book your ticket
        </Text>
        {towns.map((data, index) => {
          return (
            <BreedCard
              key={index}
              name={data.name}
              country={data.country}
              img={data.img}
            />
          );
        })}
        <View style={{ marginBottom: 100 }}></View>
      </ScrollView>
      {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
        <TouchableOpacity style={styles.totop} onPress={onTop}>
          <Image  style={{width:'100%', height:'100%', resizeMode:'contain'}}   source={require("./assets/scrolltop.png")}/> 
        </TouchableOpacity>
        
      )}
    
    </View>
  );
}

const styles = StyleSheet.create({
  main: {

    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
    alignContent: "center",
  },
  prof: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  logo: {
    width: 125,
    height: 85,
  },
  totop: {
    backgroundColor: "white",
    position: "absolute",
    borderRadius: 100,
    height: 30,
    width: 30,
    bottom: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
