import React, { useState } from "react";
import {
  Button,
  ScrollView,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Avatars from "./avatar";
import { Text } from "@rneui/themed";

function CreateAva() {
  const inputAccessoryViewID = "uniqueID";
  const initialText = "";
  const [email, setEmail] = useState(initialText);

  const handleClearText = () => {
    setEmail(initialText);
  };

  return (
    <>
      <ImageBackground
        source={require("@/assets/images/bg-dark.png")}
        resizeMode="cover"
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1 flex ">
          <View className="items-center mt-12">
            <Image
              source={require("../../assets/images/app.png")}
              className="w-32 h-32"
            />
            <Text h4 className="text-white text-center mt-4 mb-4">
              Create Your Avatar
            </Text>
            <Avatars />
            <TextInput
              className="p-4 mt-1 max-w-md text-white border border-white rounded-lg h-[50px] w-[270px] bg-black"
              inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setEmail}
              value={email}
              placeholder={"Name"}
              placeholderTextColor={"white"}
            />
            <View
              className="p-3 py-1 mt-6 max-w-xl text-white rounded rounded-xl w-[300px] mb-5"
              nativeID={inputAccessoryViewID}
            >
              <Button onPress={handleClearText} title="Sign In" />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default CreateAva;
