import React from "react";
import { View, Text } from "react-native";
import { useAllTime } from "../zustand/zustand";

function AverageTime() {
  const { allTimes } = useAllTime();
  let time;
  if (allTimes.length <= 0) {
    time = 0;
  } else {
    const sum = allTimes.reduce((acc, num) => acc + num, 0);
    time = Math.round(sum / allTimes.length);
  }
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 5,
      }}
    >
      <Text
        style={{
          fontFamily: "Ukraine",
          fontSize: 28,
          fontWeight: 700,
          color: "white",
        }}
      >
        {String(parseInt(time / 6000) % 60).padStart(2, "0")}
      </Text>
      <Text
        style={{
          fontFamily: "Ukraine",
          fontSize: 28,
          fontWeight: 700,
          color: "white",
        }}
      >
        :
      </Text>
      <Text
        style={{
          fontFamily: "Ukraine",
          fontSize: 28,
          fontWeight: 700,
          color: "white",
        }}
      >
        {String(parseInt(time / 100) % 60).padStart(2, "0")}
      </Text>
      <Text
        style={{
          fontFamily: "Ukraine",
          fontSize: 28,
          fontWeight: 700,
          color: "white",
        }}
      >
        :
      </Text>
      <Text
        style={{
          fontFamily: "Ukraine",
          fontSize: 28,
          fontWeight: 700,
          color: "white",
        }}
      >
        {String(time % 100).padStart(2, "0")}
      </Text>
    </View>
  );
}

export default AverageTime;
