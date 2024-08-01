import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  View,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "@rneui/themed";
import Feather from "@expo/vector-icons/Feather";
import Avatars from "../../components/avatar/CardAvatar";

function AvatarScreen({ navigation }: { navigation: any }) {
  const inputAccessoryViewID = "uniqueID";
  const [name, setName] = useState("");

  return (
    <>
      <View style={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/triviagame.png")}
            style={styles.image}
          />
          <Text h4 style={styles.title}>
            Create Your Avatar
          </Text>
          <Avatars />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setName}
              value={name}
              placeholder={"Name"}
              placeholderTextColor={"black"}
            />
            <Feather name="edit" size={24} color="black" style={styles.icon} />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Save"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
  },
  scrollViewContent: {
    margin: 'auto',
    justifyContent: 'center',
  },
  container: {
    alignItems: "center",
  },
  image: {},
  title: {
    marginVertical: 20,
    fontFamily: "sans-serif",
    marginTop: 1,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 20,
  },
  input: {
    width: 320,
    padding: 16,
    paddingLeft: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: "white",
    color: "black",
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 13,
  },
  buttonContainer: {
    marginTop: 2,
  },
  button: {
    backgroundColor: "#ff7a00",
    borderRadius: 100,
    paddingVertical: 13,
    width: 320,
    marginTop: 1,
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#0acf83",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});

export default AvatarScreen;
