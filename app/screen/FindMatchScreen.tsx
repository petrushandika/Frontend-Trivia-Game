import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import { Avatar, Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Data from "@/data/data.json";
import AntDesign from "react-native-vector-icons/AntDesign";

interface ItemData {
  id: number;
  name: string;
  image: string;
  price: number;
  icon: string;
}

export default function FindMatchScreen({navigation} : {navigation : any}) {
  return (
    <SafeAreaView className="w-full h-full p-5 bg-black">
      <View className="flex flex-row items-center justify-between">
        <Image
          source={require("@/assets/images/icon-trivia.png")}
          className="w-10 h-10"
        />
        <AntDesign
          name="closecircle"
          size={20}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View className="flex mt-20 justify-center items-center">
        <Text className="timer text-orange-300 text-3xl">00:18</Text>
        <Text className="text-white text-3xl">Finding Opponent</Text>
        <Text className="text-white text-xl">
          <Text className="text-green-500">{Data.length} </Text> / 5
        </Text>
      </View>

      <View className="w-full mt-5 flex flex-row justify-center items-center">
        <FlatList
          data={Data}
          renderItem={({ item }: { item: ItemData }) => (
            <View className="flex flex-row items-center w-full mb-3 space-x-3 border-2 border-white p-1 rounded-[8px]">
              <Avatar rounded source={{ uri: item.image }} size={50} />
              <Text className="text-white">{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
