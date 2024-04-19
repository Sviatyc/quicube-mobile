import { Text, View, StyleSheet } from "react-native";

function MainTime() {
  return (
    <View style={styles.mainTime}>
      <Text style={styles.mainText}>00</Text>
      <Text style={styles.mainText}>:</Text>
      <Text style={styles.mainText}>00</Text>
      <Text style={styles.mainText}>:</Text>
      <Text style={styles.mainText}>00</Text>
    </View>
  );
}

export default MainTime;

const styles = StyleSheet.create({
  mainTime: {
    fontSize: 96,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainText: {
    fontSize: 96,
    fontFamily: "Bebas",
  },
});
