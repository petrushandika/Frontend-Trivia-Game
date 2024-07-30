// import { HeaderStyleInterpolators } from "@react-navigation/stack";
import { Image, View, Text, ImageBackground, SafeAreaView } from "react-native";
import { Avatar, Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView className="w-full h-full">
      <View className="ml-auto mt-6">
        <FontAwesome name="diamond" size={20} color="yellow" />
      </View>
      <ImageBackground
        source={require("../../assets/images/423a46ea653845098f99.jpg")}
        resizeMode="cover"
        className="flex-1 p-5"
      >
        <View className="flex flex-row items-center justify-evenly">
          <Avatar
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
            }}
            size={60}
            rounded
          />
          <View className="flex gap-2">
            <Text className="text-white">Molusca_Bertulang</Text>
            <View className="flex flex-row items-center space-x-2">
              <FontAwesome name="diamond" size={20} color="yellow" />
              <Text className="text-white">8890</Text>
            </View>
          </View>
          <View>
            <FontAwesome name="pencil-square-o" size={20} color="white" />
          </View>
        </View>
        <View className="flex-1 justify-center m-auto">
          <Button
            title="Start Game"
            buttonStyle={{ backgroundColor: "green", borderRadius: 8 }}
            onPress={() => navigation.navigate("FindMatch")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
