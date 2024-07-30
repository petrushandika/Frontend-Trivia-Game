// import { HeaderStyleInterpolators } from "@react-navigation/stack";
import { Image, View, Text, ImageBackground, SafeAreaView } from "react-native";
import { Avatar, Button } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function HomeScreen({navigation} : {navigation:any}) {
  return (
     <SafeAreaView className="w-full h-full  bg-black">
      <ImageBackground
        source={require("@/assets/images/bg-kuis.png")}
        resizeMode="cover"
        className="flex-1 p-10"
      >
        <View className="flex flex-row items-center justify-between">
          <Image
            source={require("@/assets/images/icon-trivia.png")}
            className="w-10 h-10"
          />
          <View className="flex flex-row items-center border-[1px] bg-slate-700 space-x-2 ">
            <Image
              source={require("@/assets/images/diamond.png")}
              className="w-5 h-5"
            />
            <Text className="text-white">21</Text>
            <AntDesign name="plussquare" size={20} color="white" />
          </View>
        </View>

        <View className="flex justify-center items-center mt-[90px] w-full space-y-3">
          <Avatar
            rounded
            source={{
              uri: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
            }}
            size={80}
          />
          <FontAwesome6
            name="pencil"
            className="text-white absolute right-[110px] rounded-full p-1 bg-blue-600"
            size={10}
          />

          <Text className="text-white text-lg">Molusca Bertulang</Text>
        </View>

        <View className="flex justify-center items-center mt-28">
          <Button
            title="START GAME"
            buttonStyle={{ backgroundColor: "green" }}
            onPress={() => navigation.navigate("FindMatch")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>

  );
}
