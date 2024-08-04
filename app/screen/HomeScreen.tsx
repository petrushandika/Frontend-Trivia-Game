import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Avatar, Button } from "react-native-elements";
import AvatarModal from '../../components/modal/AvatarModal';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-8686451-7944083.png?f=webp");

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View className='flex-1 gap-10 mt-1'>
      <View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            right: 20,
          }}
          onPress={() => navigation.navigate("DiamondShop")}
        >
          <View className='flex flex-row gap-x-5 items-center'>
            <Image
              source={require("../../assets/images/diamond.png")}
              className="w-4 h-4 ml-1"
            />
            <Text>21</Text>
            <FontAwesome name="plus-square" size={20} color="green" />
          </View>
        </TouchableOpacity>
      </View>
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
        <Text className='text-base text-gray-500 text-center'>Perfect game to challenge your</Text>
        <Text className='text-base text-gray-500 text-center'>friends and have hours of fun!</Text>
      </View>
      <View className='flex flex-row items-center'>
        <Avatar
          rounded
          source={{
            uri: selectedAvatar,
          }}
          size={80}
          containerStyle={{
            borderColor: 'black',
            borderWidth: 1,
            marginLeft: 10,
            marginRight: 10
          }}
          onPress={toggleModal}
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
          }}
          onPress={() => navigation.navigate("Match")}
        />
      </View>
      <AvatarModal
        modalVisible={modalVisible}
        toggleModal={toggleModal}
        setSelectedAvatar={setSelectedAvatar}
      />
    </View>
  );
}