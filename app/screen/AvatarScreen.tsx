import React, { useState } from "react";
import { ScrollView, TextInput, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button } from "@rneui/themed";
import Feather from "@expo/vector-icons/Feather";
import CardAvatar from "../../components/avatar/ChooseAvatar"; // Import the updated CardAvatar component
import ErrorBoundary from "../../components/avatar/ErrorBoudary";

function CardAvatarScreen({ navigation }: { navigation: any }) {
  const inputAccessoryViewID = "uniqueID";
  const [name, setName] = useState("");

  return (
    <View style={styles.viewContent}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/triviagame.png")}
          style={styles.image}
        />
        <Text h4 style={styles.title}>
          Create Your Avatar
        </Text>
        <ErrorBoundary>
        <CardAvatar />
        </ErrorBoundary>
        
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
  );
}

const styles = StyleSheet.create({
  viewContent: {
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
});

export default CardAvatarScreen;
