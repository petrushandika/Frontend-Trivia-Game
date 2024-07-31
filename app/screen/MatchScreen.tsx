import { View, Text, Image, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Data from "../../data/data.json";

interface ItemData {
  id: number;
  name: string;
  image: string;
}

export default function MatchScreen({ navigation }: { navigation: any }) {
  const limitedData = Data.slice(0, 5);

  return (
    <View className='mt-10 p-5'>
      <View className='flex flex-row justify-between bg-black p-5 rounded-full'>
        <View className='flex flex-row'>
          <Text className='text-white text-base'>Finding Opponent</Text>
        </View>
        <View>
          <Text className='text-white text-base'>5 / 5</Text>
        </View>
        <View className='flex flex-row items-center gap-x-3'>
          <Text className='text-white text-base'>00 : 18</Text>
          <AntDesign name="forward" size={20} color="white" />
        </View>
      </View>
      <View className='gap-y-10 mt-1 mb-14'>
        <FlatList
          data={limitedData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: ItemData }) => (
            <View className="flex-row items-center py-4 bg-gray-800 rounded-full my-4" style={{ maxWidth: '100%' }}>
              <View className="absolute">
                <Image
                  source={{ uri: item.image }}
                  className="w-20 h-20 rounded-full bg-amber-400"
                />
              </View>
              <View className="ml-24 flex-1">
                <Text className="text-white text-base">{item.name}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
        <AntDesign
          name="closecircle"
          size={50}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View >
  );
}
