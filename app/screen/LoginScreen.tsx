import { useState } from "react";
import {
  Button,
  ScrollView,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function Login() {
  const inputAccessoryViewID = "uniqueID";
  const initialText = "";
  const [email, setEmail] = useState(initialText);

  const handleClearText = () => {
    setEmail(initialText);
  };

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/bg-dark.png")}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="m-auto mt-[100%]">
          <Image
            source={require("../../assets/images/app.png")}
            className="w-32 h-32"
          />

          <ScrollView keyboardDismissMode="interactive" className="flex m-auto">
            <TextInput
              className="p-4 mt-12 max-w-md text-white border border-white rounded-lg h-[50px] w-[270px] bg-black"
              inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setEmail}
              value={email}
              placeholder={"Email"}
              placeholderTextColor={"white"}
            />

            <TouchableOpacity></TouchableOpacity>
          </ScrollView>
          <View
            className="p-3 py-1 mt-6 max-w-xl text-white rounded rounded-xl w-[300px]"
            nativeID={inputAccessoryViewID}
          >
            <Button onPress={handleClearText} title="Sign In" />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default Login;
