import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}
    >
      <Text style={styles.text}>Hello Expo and Mertkaan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#ffffff",
  },
});