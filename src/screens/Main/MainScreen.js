import {
  SafeAreaView,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { useState } from "react";
import MainTime from "../../components/MainTime";
function MainScreen() {
  const [time, useTime] = useState(0);
  const [fontsLoaded] = useFonts({
    Bebas: require("../../assets/fonts/Bebas_Neue_Cyrillic.ttf"),
    Ukraine: require("../../assets/fonts/e-Ukraine.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/logotype.png")}
          style={styles.logotype}
        />
        <Text style={styles.mainTime}>
          <MainTime />
        </Text>
        <View style={styles.info_container}>
          <View style={styles.left_side}>
            <Text style={styles.left_side_text}>Середній час складання</Text>
            <Text style={styles.left_side_text}>
              Середній час складання (10р.)
            </Text>
          </View>
          <View style={styles.right_side}>
            <Text style={styles.right_side_text}>Час останніх складань</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.reset_button}>
          <Text style={styles.reset_button_text}>Скинути результат</Text>
          <Image
            source={require("../../assets/images/delete.png")}
            style={styles.reset_button_icon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
  },
  logotype: {
    marginTop: 28,
  },
  mainTime: {
    marginTop: 90,
  },
  info_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 100,
  },
  left_side: {
    width: "48%",
    height: 247,
    paddingTop: 20,
    paddingLeft: 14,
    backgroundColor: "#279AF1",
    borderRadius: 12,
  },
  right_side: {
    width: "48%",
    height: 247,
    backgroundColor: "#B5DCF9",
    borderRadius: 12,
    paddingTop: 20,
    paddingLeft: 14,
  },
  reset_button: {
    backgroundColor: "#242424",
    width: "100%",
    height: 115,
    borderRadius: 12,
    marginTop: 10,
  },
  reset_button_text: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 30,
    color: "white",
    fontFamily: "Ukraine",
  },
  reset_button_icon: {
    width: 40,
    height: 40,
    marginTop: 5,
    marginLeft: "80%",
  },
  left_side_text: {
    fontSize: 15,
    fontFamily: "Ukraine",
    color: "white",
  },
  right_side_text: {
    fontSize: 15,
    fontFamily: "Ukraine",
    fontWeight: "600",
  },
});

export default MainScreen;
