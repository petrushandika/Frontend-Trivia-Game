import {
  View,
  Image,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-elements";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }: { navigation: any }) {
  const handleLogin = () => {
    WebBrowser.openAuthSessionAsync(
      "https://871d-2404-8000-1005-37ac-d060-5fa8-3ba0-ae50.ngrok-free.app/google/redirect"

    );
    WebBrowser.dismissBrowser()
    navigation.navigate('Avatar')
  };

  return (
    <View className="bg-white h-full">
      <ImageBackground
        className="flex-1"
      >
        <View className="m-auto items-center">
          <View>
            <Image
              source={require("../../assets/images/triviagame.png")}
              className="w-38 h-38"
            />
          </View>

          <View>
            <Button
              onPress={() => handleLogin()}
              title="Continue with Google"
              buttonStyle={{
                backgroundColor: "darkorange",
                borderRadius: 100,
                paddingVertical: 15,
                width: 320,
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
    </View>
  );
}