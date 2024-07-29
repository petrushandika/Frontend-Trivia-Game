import { Image, View, Text, ImageBackground, SafeAreaView } from "react-native";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 p-6">
      <ImageBackground
        source={require("../../assets/images/423a46ea653845098f99.jpg")}
        resizeMode="cover"
        className="flex-1"
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
          }}
          className="w-20 h-20 rounded-full"
        />
        <Text className="text-green-500"> Hello World</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}
