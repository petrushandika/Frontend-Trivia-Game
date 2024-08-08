import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Data from "../../data/data.json";
import { MatchDto } from '@/dto/MatchDto';
import socket from '../../services/socketService';

export default function MatchScreen({ navigation }: { navigation: any }) {
  const [matches, setMatches] = useState<MatchDto[]>([]);
  const [isFindingOpponent, setIsFindingOpponent] = useState(true);
  const [listPlayers, setListPlayers] = useState<any[]>([]);
  const [timer, setTimer] = useState(10);
  const [isRoomFull, setIsRoomFull] = useState(false);
  const limitedData = Data.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          if (!isRoomFull) {
            navigation.navigate('Home');
          }
          // navigation.navigate("Question")
          return 0;
        }
      });
    }, 1000);

    socket.on('matchFound', (matchData) => {
      setMatches(matchData);
      setIsFindingOpponent(false);
      setIsRoomFull(false);
      clearInterval(interval);
      navigation.navigate('Question', { roomId: matchData });
    });

    socket.on('error', (error: Error) => {
      console.error('Socket error:', error);
      setIsFindingOpponent(false);
      clearInterval(interval);
      navigation.navigate('Home');
    });

    socket.on('waiting', (room: any) => {
      console.log("list players", room.players);
      setListPlayers(room.players);
      setIsRoomFull(room.players.length >= 2); // Room full condition for user length

      // Navigate to Question screen if the room is full
      if (room.players.length >= 2) {
        clearInterval(interval);
        navigation.navigate('Question');
      }
    });

    return () => {
      clearInterval(interval);
      socket.off('matchFound');
      socket.off('error');
      socket.off('waiting');
    };
  }, []);

  const handleFindOpponent = () => {
    socket.emit('findOpponent');
  };

  const handleCancelFinding = () => {
    socket.emit('cancelFinding');
    setIsFindingOpponent(false);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View className='mt-10 p-5'>
      <View className='flex flex-row justify-between bg-black p-5 rounded-full'>
        <View className='flex flex-row'>
          <Text className='text-white text-base'>{isFindingOpponent ? 'Finding Opponent' : 'Opponent Found'}</Text>
        </View>
        <View>
          <Text className='text-white text-base'>{isFindingOpponent ? `${listPlayers.length} / 1` : '1 / 1'}</Text>
        </View>
        <View className='flex flex-row items-center gap-x-3'>
          <Text className='text-white text-base'>{formatTime(timer)}</Text>
          {isFindingOpponent ? (
            <AntDesign name="closecircle" onPress={handleCancelFinding} size={20} color="white" />
          ) : (
            <AntDesign name="forward" onPress={() => navigation.navigate("Question")} size={20} color="white" />
          )}
        </View>
      </View>
      <View className='gap-y-10 mt-1 mb-14'>
        <FlatList
          data={listPlayers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="flex-row items-center py-4 bg-gray-800 rounded-full my-4" style={{ maxWidth: '100%' }}>
              <View className="absolute">
                <Image
                  source={{ uri: item.userAvatar[item.userAvatar.length - 1].avatar.image }}
                  className="w-20 h-20 rounded-full bg-amber-400"
                />
              </View>
              <View className="ml-24 flex-1">
                <Text className="text-white text-base">{item.username}</Text>
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
    </View>
  );
}
