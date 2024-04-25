import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAllTime } from "../zustand/zustand";

function LastResult({ DialogVisible }) {
  const { allTimes } = useAllTime();
  const colors = ["rgb(0, 147, 0)", "rgb(0, 107, 0)", "rgb(18, 78, 0)"];

  const mappedLastTimes = allTimes.map((item, index) => (
    <View
      key={index}
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          fontFamily: "Ukraine",
          fontSize: 19,
          color:
            index >= allTimes.length - 3
              ? colors[index - allTimes.length + 3]
              : "black",
        }}
      >
        {String(parseInt(item / 6000) % 60).padStart(2, "0")}
      </Text>
      <Text
        style={{
          fontFamily: "Ukraine",
          fontSize: 19,
          color:
            index >= allTimes.length - 3
              ? colors[index - allTimes.length + 3]
              : "black",
        }}
      >
        :
      </Text>
      <Text
        style={{
          fontFamily: "Ukraine",
          fontSize: 19,
          color:
            index >= allTimes.length - 3
              ? colors[index - allTimes.length + 3]
              : "black",
        }}
      >
        {String(parseInt(item / 100) % 60).padStart(2, "0")}
      </Text>
      <Text
        style={{
          fontFamily: "Ukraine",
          fontSize: 19,
          color:
            index >= allTimes.length - 3
              ? colors[index - allTimes.length + 3]
              : "black",
        }}
      >
        ,
      </Text>
      <Text
        style={{
          fontFamily: "Ukraine",
          fontSize: 19,
          color:
            index >= allTimes.length - 3
              ? colors[index - allTimes.length + 3]
              : "black",
        }}
      >
        {String(item % 100).padStart(2, "0")}
      </Text>
    </View>
  ));

  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ display: "flex", flexDirection: "column-reverse" }}>
        {mappedLastTimes}
      </View>
    </ScrollView>
  );
}

export default LastResult;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 6,
    height: "75%",
  },
});
