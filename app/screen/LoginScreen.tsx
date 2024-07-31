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

  // Width for buttons and input fields
  const buttonWidth = 320;

  return (
    <>
      <ImageBackground
        className="flex-1"
        style={{ padding: 20 }} // Add padding to avoid content touching the edges
      >
        <View className="m-auto items-center" style={{ marginTop: 100 }}>
          <Image
            source={require("../../assets/images/triviagame.png")}
            className="w-38 h-38"
          />

          {/* <Text
            
            style={{
              color: "black",
              fontFamily: "sans-serif",
              fontSize: 70, // Increase font size for better visibility
              fontWeight: "bold", // Add font weight for emphasis
              marginBottom: 10, // Add margin bottom for spacing
              alignSelf: 'flex-start', // Align text to the left
              marginLeft: 10, 
            }}
          >
            SIGN IN
          </Text>
          <Text
            style={{
              fontSize: 16, // Adjust font size for consistency
              color: "gray", // Use a gray color for a subtle look
              marginBottom: 30, // Add margin bottom to separate from input fields
              alignSelf: 'flex-start', // Align text to the left
              marginLeft: 10,
            }}
          >
            Sign in with email
          </Text> */}
          <ScrollView
            keyboardDismissMode="interactive"
            className="flex"
          >
            <View style={{ position: "relative", marginBottom: 20 }}>
              <TextInput
                style={{ width: buttonWidth, }}
                className="p-4 pl-12 border border-black rounded-full h-[60px]"
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setEmail}
                value={email}
                placeholder={"Email"}
                placeholderTextColor={"black"}

              />
              <Fontisto
                name="email"
                size={24}
                color="black"
                style={{ position: "absolute", left: 10, top: 18 }} 
              />
            </View>

            <View style={{ position: "relative", marginBottom: 30 }}>
              <TextInput
                style={{ width: buttonWidth }}
                className="p-4 pl-12 border border-black rounded-full h-[60px]"
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setPassword}
                value={password}
                placeholder={"Password"}
                placeholderTextColor={"black"}
                secureTextEntry={true}
              />
              <FontAwesome5
                name="key"
                size={24}
                color="black"
                style={{ position: "absolute", left: 10, top: 18 }}  
              />
            </View>
          </ScrollView>

          <View style={{ padding: 20 }}>
            <Button
              title="Sign In"
              buttonStyle={{
                backgroundColor: "#ff7a00",
                borderRadius: 100,
                paddingVertical: 10,
                width: buttonWidth,
              }}
              titleStyle={{
                color: "white",
                fontSize: 20,
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                /* Handle sign in navigation */
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#ff7a00" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 20 }}>
            <Button
              title="Continue with Google"
              buttonStyle={{
                backgroundColor: "#a28bfc",
                borderRadius: 100,
                paddingVertical: 10,
                width: buttonWidth,
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
        </View>
      </ImageBackground>
    </>
  );
}

export default Login;
