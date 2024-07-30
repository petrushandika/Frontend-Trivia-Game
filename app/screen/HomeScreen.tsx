import { View, Image, Text } from 'react-native';
import { Avatar, Button } from "react-native-elements";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View className='flex-1 gap-10 mt-1'>
      <View className='p-2'>
        <View className='flex flex-row justify-between mb-2'>
          <View className='flex-1 mr-2 bg-pink-200 rounded-lg'>
            <Image
              source={require("../../assets/images/person1.jpg")}
              className='w-full h-48'
            />
          </View>
          <View className='flex-1 bg-lime-200 rounded-lg'>
            <Image
              source={require("../../assets/images/person2.jpg")}
              className='w-full h-48'
            />
          </View>
        </View>
        <View className='flex flex-row justify-between'>
          <View className='flex-1 mr-2 bg-amber-200 rounded-lg'>
            <Image
              source={require("../../assets/images/person3.jpg")}
              className='w-full h-48'
            />
          </View>
          <View className='flex-1 bg-blue-200 rounded-lg'>
            <Image
              source={require("../../assets/images/person4.jpg")}
              className='w-full h-48'
            />
          </View>
        </View>
      </View>
      <View>
        <Text className='text-5xl font-semibold text-center'>Trivia Game Quiz</Text>
        <Text className='text-base text-gray-500 text-center'>Perfect game to challange your</Text>
        <Text className='text-base text-gray-500 text-center'>friends and have hours of fun!</Text>
      </View>
      <View className='flex flex-row items-center'>
        <Avatar
          rounded
          source={{
            uri: "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-8686451-7944083.png?f=webp",
          }}
          size={80}
          containerStyle={{
            borderColor: 'black',
            borderWidth: 1,
            marginLeft: 10,
          }}
        />
        <Button
          title="Start Game"
          buttonStyle={{
            backgroundColor: 'darkorange',
            borderRadius: 50,
            borderColor: 'black',
            paddingVertical: 15,
            width: '70%',
          }}
          titleStyle={{
            color: 'white',
            fontSize: 20,
          }}
          containerStyle={{
            width: '100%',
            marginLeft: 10,
          }}
          onPress={() => navigation.navigate("FindMatch")}
        />
      </View>
    </View>
  );
}

