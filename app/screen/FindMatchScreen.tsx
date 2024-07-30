import { View, Text, SafeAreaView, FlatList } from "react-native";
import { Avatar, Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Data from "@/data/data.json";

interface ItemData {
  id: number;
  name: string;
  image: string;
  price: number;
  icon: string;
}

export default function FindMatchScreen() {
  return (
    <SafeAreaView className="w-full h-full p-5">
      <View className="flex-1 m-auto justify-center items-center space-y-2">
        <FontAwesome name="search" size={100} color="orange" />
        <Text className="text-white text-xl">Finding Match</Text>
      </View>
      <FlatList
        data={Data}
        renderItem={({ item }: { item: ItemData }) => (
          <View className="flex flex-row items-center w-full mb-4 space-x-3">
            <Avatar rounded source={{ uri: item.image }} size={50} />
            <Text className="text-white">{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
