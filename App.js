import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@react-native-material/core";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChange={(e) => setName(e.target.value)}
      /> */}
      {/* <Image style={styles.tinyLogo} source={require("./assets/favicon.png")} /> */}
      <Button
        style={styles.buttonLogin}
        title="REGISTER"
        onPress={() => alert("🎉🎉")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    backgroundColor: "#90EE90",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    backgroundColor: "rgba(229, 57, 53, 1)",
    width: "90%",
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    opacity: 0.75,
  },
  input: {
    width: "85%",
    height: 50,
    fontSize: 18,
    paddingLeft: 60,
    marginTop: 50,
    color: "#000",
    backgroundColor: "#E5E5E5",
  },
});
