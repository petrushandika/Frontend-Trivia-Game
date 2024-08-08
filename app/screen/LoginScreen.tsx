import {
  View,
  Image,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-elements";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as WebBrowser from "expo-web-browser";
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-async-storage/async-storage'
import ASYNC_STORAGE from "@/networks/storage";


export default function LoginScreen({ navigation }: { navigation: any }) {
  const handleLogin = async () => {
    const redirectUrl = Linking.createURL("/");
    const response = await WebBrowser.openAuthSessionAsync(
      `https://034c-2404-8000-1003-dfda-2c1c-bbd6-6b98-4468.ngrok-free.app/google/redirect?redirectTo=${redirectUrl}`,
      redirectUrl
    );
    const token = response.url.split("=")[1].split("&")[0];
    console.log(token)
    // ASYNC_STORAGE.SET(token);
    try {
      await AsyncStorage.setItem('token', token);
      console.log('Token berhasil disimpan');
    } catch (error) {
      console.log('Gagal menyimpan token:', error);
    }

    navigation.navigate('Avatar');

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