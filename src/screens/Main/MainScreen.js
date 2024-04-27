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
import Dialog from "react-native-dialog";
import DialogButton from "react-native-dialog/lib/Button";
import { useFonts } from "expo-font";
import { useState } from "react";
import { useAllTime } from "../../zustand/zustand";
import MainTime from "../../components/MainTime";
import LastResult from "../../components/LastResult";
import AverageTime from "../../components/AverageTime";
import AverageTen from "../../components/AverageTen";

function MainScreen() {
  const [DialogVisible, setDialogVisible] = useState(false);
  const { clearAllTime, allTimes } = useAllTime();

  const [fontsLoaded] = useFonts({
    Bebas: require("../../assets/fonts/Bebas_Neue_Cyrillic.ttf"),
    Ukraine: require("../../assets/fonts/e-Ukraine.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const dialog_time_cleaner = () => {
    setDialogVisible(false);
    clearAllTime();
  };
  const dialog_open = () => {
    allTimes.length <= 0 ? setDialogVisible(false) : setDialogVisible(true);
  };

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        opacity: DialogVisible ? 0.1 : 1,
      }}
    >
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
            <Text style={styles.left_side_text_one}>
              Середній час складання
            </Text>
            <AverageTime />
            <Text style={styles.left_side_text_two}>
              Середній час складання (3р.)
            </Text>
            <AverageTen />
          </View>
          <View style={styles.right_side}>
            <Text style={styles.right_side_text}>Час останніх складань</Text>
            <View>
              <LastResult DialogVisible={DialogVisible} />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.reset_button}
          onPress={() => dialog_open()}
          activeOpacity={0.8}
        >
          <Text style={styles.reset_button_text}>Скинути результат</Text>
          <Image
            source={require("../../assets/images/delete.png")}
            style={{
              width: 40,
              height: 40,
              marginTop: 5,
              marginLeft: "80%",
            }}
          />
          <Dialog.Container
            visible={DialogVisible}
            contentStyle={styles.dialog_container}
          >
            <Dialog.Title style={styles.dialog_title}>
              Ви справді бажаєте скинути результат?
            </Dialog.Title>
            <DialogButton
              label="Так"
              onPress={() => dialog_time_cleaner()}
              style={{
                backgroundColor: "#242424",
                borderRadius: 8,
                color: "white",
                marginRight: 10,
                fontSize: 18,
              }}
            />
            <DialogButton
              label="Ні"
              onPress={() => setDialogVisible(false)}
              style={{
                color: "white",
                backgroundColor: "#242424",
                marginRight: 15,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
          </Dialog.Container>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
  },
  logotype: {
    marginTop: 28,
    width: 70,
    height: 25,
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
  left_side_text_one: {
    fontSize: 15,
    fontFamily: "Ukraine",
    color: "white",
  },
  left_side_text_two: {
    fontSize: 15,
    fontFamily: "Ukraine",
    color: "white",
    marginTop: 30,
  },
  right_side_text: {
    fontSize: 15,
    fontFamily: "Ukraine",
    fontWeight: "600",
  },
  dialog_container: {
    backgroundColor: "#B5DCF9",
    borderRadius: 20,
    margin: 0,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 0.8,
  },
  dialog_title: {
    fontFamily: "Ukraine",
    fontSize: 18,
    padding: 10,
    borderRadius: 12,
    color: "black",
  },
});

export default MainScreen;
