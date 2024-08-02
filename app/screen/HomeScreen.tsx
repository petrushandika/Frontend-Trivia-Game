import React, { useEffect, useState } from 'react';
import { View, Image, Text, Alert } from 'react-native';
import { Avatar, Button } from "react-native-elements";
import io from 'socket.io-client';

const socket = io('https://2f43-2404-8000-1005-37ac-b9aa-a1e6-e965-51fc.ngrok-free.app', {
  transports: ['websocket'],
});

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [userId, setUserId] = useState('');
  const [roomId, setRoomId] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
      const id = 'user-' + Math.random();
      setUserId(id);
      socket.emit('findMatch', id);
    });

    socket.on('matchFound', ({ roomId, userId }) => {
      setRoomId(roomId);
      console.log(`Match found: Room ID ${roomId}, User ID ${userId}`);
      Alert.alert('Match Found', `Room ID: ${roomId}\nYour User ID: ${userId}`);
    });

    socket.on('roomFull', (roomId) => {
      console.log(`Room ${roomId} is full`);
      Alert.alert('Room Full', `Room ${roomId} is full`);
    });

    socket.on('userLeft', (userId) => {
      console.log(`User ${userId} left the room`);
      Alert.alert('User Left', `User ${userId} left the room`);
    });

    return () => {
      socket.off('connect');
      socket.off('matchFound');
      socket.off('roomFull');
      socket.off('userLeft');
    };
  }, []);

  const handleFindMatch = () => {
    if (!userId) {
      console.log('User ID not set');
      return;
    }
    console.log('Finding match with User ID:', userId);
    socket.emit('findMatch', userId);
  };

  const handleStartGame = () => {
    Alert.alert(
      'Start Game',
      `User ID: ${userId}`,
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('Starting game with User ID:', userId);
            navigation.navigate("Match");
            handleFindMatch();
          }
        }
      ],
      { cancelable: false }
    );
  };

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
        <Text className='text-base text-gray-500 text-center'>Perfect game to challenge your</Text>
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
            marginRight: 10
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
          }}
          onPress={handleStartGame}
        />
      </View>
    </View>
  );
}
