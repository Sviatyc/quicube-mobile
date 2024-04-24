import { useState } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";

function MainTime() {
  const [mainColor, setMainColor] = useState("black");
  return (
    <TouchableWithoutFeedback
      onLongPress={(i) => setMainColor((i = "green"))}
      onPressIn={(i) => setMainColor((i = "red"))}
      onPressOut={(i) => setMainColor((i = "black"))}
    >
      <View style={styles.mainTime}>
        <Text style={{ color: mainColor, fontFamily: "Bebas", fontSize: 96 }}>
          00
        </Text>
        <Text style={{ color: mainColor, fontFamily: "Bebas", fontSize: 96 }}>
          :
        </Text>
        <Text style={{ color: mainColor, fontFamily: "Bebas", fontSize: 96 }}>
          00
        </Text>
        <Text style={{ color: mainColor, fontFamily: "Bebas", fontSize: 96 }}>
          :
        </Text>
        <Text style={{ color: mainColor, fontFamily: "Bebas", fontSize: 96 }}>
          00
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
