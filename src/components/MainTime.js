import { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useAllTime } from "../zustand/zustand";

function MainTime() {
  const [mainColor, setMainColor] = useState("black");
  const [time, setTime] = useState(0);
  const [ready, setReady] = useState(false);
  const [isTiming, setTiming] = useState(false);
  const timeIntervalRef = useRef(null);

  const { allTimes, addTimes } = useAllTime();

  const startTime = () => {
    setTiming(true);
    timeIntervalRef.current = setInterval(
      () => setTime((time) => time + 1),
      10
    );
  };
  const stopTime = () => {
    clearInterval(timeIntervalRef.current);
    addTimes(time);
    setTiming(false);
  };

  useEffect(() => {
    SecureStore.setItemAsync("times", JSON.stringify(allTimes));
  }, [allTimes]);

  useEffect(() => {
    return () => {
      clearInterval(timeIntervalRef.current);
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      onLongPress={
        !isTiming
          ? (i) => {
              setMainColor((i = "green"));
              setTime(0);
              setReady(true);
            }
          : null
      }
      onPressIn={(i) => {
        setMainColor(!isTiming ? (i = "red") : null);
      }}
      onPressOut={(i) => {
        setMainColor((i = "black"));
        ready ? startTime() : isTiming ? stopTime() : null;
        setReady(false);
      }}
    >
      <View style={styles.mainTime}>
        <Text style={{ color: mainColor, fontFamily: "Bebas", fontSize: 96 }}>
          {String(parseInt(time / 6000) % 60).padStart(2, "0")}
        </Text>
        <Text style={{ color: mainColor, fontFamily: "Bebas", fontSize: 96 }}>
          :
        </Text>
        <Text style={{ color: mainColor, fontFamily: "Bebas", fontSize: 96 }}>
          {String(parseInt(time / 100) % 60).padStart(2, "0")}
        </Text>
        <Text style={{ color: mainColor, fontFamily: "Bebas", fontSize: 96 }}>
          :
        </Text>
        <Text style={{ color: mainColor, fontFamily: "Bebas", fontSize: 96 }}>
          {String(time % 100).padStart(2, "0")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MainTime;

const styles = StyleSheet.create({
  mainTime: {
    fontSize: 96,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
