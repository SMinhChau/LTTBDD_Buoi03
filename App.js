import { StyleSheet, View, TextInput } from "react-native";
import { Button, Text } from "@react-native-material/core";
import { useState } from "react";
import RadioForm from "react-native-simple-radio-button";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [checked, setChecked] = useState("first");

  var radio_props = [
    { label: "Male", value: 0 },
    { label: "Fenale", value: 1 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>register</Text>
      <TextInput
        style={styles.text}
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        style={styles.text}
        value={phone}
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextInput
        style={styles.text}
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        style={styles.text}
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        style={styles.text}
        value={birthday}
        placeholder="Birthday"
        onChange={(e) => setBirthday(e.target.value)}
      />
      <View style={styles.checkboxContainer}>
        <View style={styles.contentCheck}>
          <RadioForm
            style={styles.check}
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={"gray"}
            animation={true}
            labelStyle={{ fontSize: 20, color: "#000", marginRight: 15 }}
            onPress={(value) => {
              setChecked({ value: value });
            }}
          />
        </View>
      </View>
      <Button
        style={styles.buttonLogin}
        title="REGISTER"
        onPress={() => alert("🎉🎉")}
      />
      <Text style={styles.textTitle} variant="subtitle1">
        When you agree to terms and conditions
      </Text>
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
    backgroundColor: "#d8efde",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 25,
    lineHeight: 29,
    fontStyle: "bold",
    marginBottom: 20,
  },
  buttonLogin: {
    backgroundColor: "rgba(229, 57, 53, 1)",
    width: "90%",
    height: 54,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    opacity: 0.75,
  },

  text: {
    height: 54,
    width: "90%",
    fontSize: 18,
    lineHeight: 21,
    backgroundColor: "#c9e0d0",
    marginTop: 20,
    paddingLeft: 20,
  },
  textTitle: {
    marginTop: 20,
    fontSize: 14,
  },
  checkboxContainer: {
    height: 54,
    marginTop: 20,
    display: "flex",

    flexDirection: "row",
  },
  contentCheck: {},
  check: {
    marginRight: 10,
  },
});
