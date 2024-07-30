import { useState } from "react";
import {
  ScrollView,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text } from "@rneui/themed";
import { Button } from "react-native-elements";
import AntDesign from "@expo/vector-icons/AntDesign";

function Login() {
  const inputAccessoryViewID = "uniqueID";
  const initialText = "";
  const [email, setEmail] = useState(initialText);
  const [password, setPassword] = useState(initialText);

  const handleClearText = () => {
    setEmail(initialText);
    setPassword(initialText);
  };

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/bg-dark.png")}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="m-auto items-center">
          <Image
            source={require("../../assets/images/newname.png")}
            className="w-38 h-38"
          />

          <View style={{ padding: 20 }}>
            <Button
              title="Continue with Google"
              buttonStyle={{
                backgroundColor: "#ad2366",
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}
              titleStyle={{
                color: "white",
                fontSize: 20,
              }}
              icon={
                <AntDesign
                  name="google"
                  size={24}
                  color="white"
                  style={{ marginRight: 10 }}
                />
              }
              iconPosition="left"
            />
          </View>

          <Text h4 style={{ color: "white", fontFamily: "sans-serif", marginBottom: 1}}>
            OR
          </Text>
          <ScrollView
            keyboardDismissMode="interactive"
            className="flex mt-10 m-auto "
          >
            <View style={{ position: "relative" }}>
              <TextInput
                className="p-4 pl-10 mt-3 max-w-md text-white border border-white rounded-lg h-[50px] w-[270px] bg-black"
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setEmail}
                value={email}
                placeholder={"Email"}
                placeholderTextColor={"white"}
              />
              <Fontisto
                name="email"
                size={24}
                color="white"
                style={{ position: "absolute", left: 10, top: 13 }}
              />
            </View>

            <View style={{ position: "relative" }}>
              <TextInput
                className="p-4 pl-10 mt-1 max-w-md text-white border border-white rounded-lg h-[50px] w-[270px] bg-black"
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setEmail}
                value={email}
                placeholder={"Password"}
                placeholderTextColor={"white"}
              />
              <FontAwesome5
                name="key"
                size={24}
                color="white"
                style={{ position: "absolute", left: 10, top: 13 }}
              />
            </View>
          </ScrollView>
          
          <View style={{ padding: 20 }}>
            <Button
              title="Sign Up "
              buttonStyle={{
                backgroundColor: "#0acf83",
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 100,
              }}
              titleStyle={{
                color: "white",
                fontSize: 20,
              }}
            />
          </View>
          <Text style={{color: "white"}}>
            Don't have an account?{" "}
            <TouchableOpacity
              onPress={() => {
                /* Handle sign in navigation */
              }}
            >
              <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}

export default Login;
