import { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Avatar, Button } from "react-native-elements";
import AvatarModal from '../../components/modal/AvatarModal';
import DiamondModal from '../../components/modal/DiamondModal';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import API from '@/networks/api';
import { UserDto } from '@/dto/UserDto';
import useFetchProfile from "@/hooks/useFetchProfile";
import { joinQueue, leaveRoom, onMatchFound, onRoomFull, onUserLeft } from '../../services/socketService';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [diamondModalVisible, setDiamondModalVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-8686451-7944083.png?f=webp");
  const [user, setUser] = useState<UserDto | null>(null);
  const [roomId, setRoomId] = useState<string | null>(null);

  const toggleAvatarModal = () => {
    setAvatarModalVisible(!avatarModalVisible);
  };

  const toggleDiamondModal = () => {
    setDiamondModalVisible(!diamondModalVisible);
  };

  const setSelectedDiamond = (diamond: string) => {
    console.log("Selected diamond:", diamond);
  };

  const { profile } = useFetchProfile();

  const lastAvatar = profile?.userAvatar[profile?.userAvatar.length - 1];
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await API.USER.GET_ONE_USER(1);
        setUser(response);
        if (response.avatar) {
          setSelectedAvatar(response.avatar);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    }

    fetchUser();
  }, []);

  useEffect(() => {
    onMatchFound(({ roomId, userId }) => {
      console.log(`Match found! Room ID: ${roomId}, User ID: ${userId}`);
      setRoomId(roomId);
    });

    onRoomFull((roomId) => {
      console.log(`Room ${roomId} is full.`);
    });

    onUserLeft((userId) => {
      console.log(`User ${userId} left the room.`);
    });

    return () => {
      leaveRoom();
    };
  }, []);

  const handleJoinQueue = () => {
    joinQueue();
  };

  const handleLeaveRoom = () => {
    leaveRoom();
    setRoomId(null);
  };

  const handleStartGame = () => {
    navigation.navigate("Match");
    handleJoinQueue();
  };

  return (
    <View className='flex-1 gap-y-10 mt-1'>
      <View>
        <TouchableOpacity
          className='w-full flex flex-row justify-between items-center'
          style={{
            position: "absolute",
            top: 0,
          }}
          onPress={toggleDiamondModal}
        >
          <View className='ml-3'>
            <Text className='text-base font-medium'>Hi, {profile?.username}</Text>
          </View>
          <View className='mr-3 flex flex-row gap-x-5 items-center'>
            <Image
              source={require("../../assets/images/diamond.png")}
              className="w-4 h-4 ml-1"
            />
            {/* Display user diamond count or any other user-related information */}
            <Text>{profile?.diamond}</Text>
            <FontAwesome name="plus-square" size={20} color="green" />
          </View>
        </TouchableOpacity>
      </View>
      <View className="p-2">
        <View className="flex flex-row justify-between mb-2">
          <View className="flex-1 mr-2 bg-pink-200 rounded-lg">
            <Image
              source={require("../../assets/images/person1.jpg")}
              className="w-full h-48"
            />
          </View>
          <View className="flex-1 bg-lime-200 rounded-lg">
            <Image
              source={require("../../assets/images/person2.jpg")}
              className="w-full h-48"
            />
          </View>
        </View>
        <View className="flex flex-row justify-between">
          <View className="flex-1 mr-2 bg-amber-200 rounded-lg">
            <Image
              source={require("../../assets/images/person3.jpg")}
              className="w-full h-48"
            />
          </View>
          <View className="flex-1 bg-blue-200 rounded-lg">
            <Image
              source={require("../../assets/images/person4.jpg")}
              className="w-full h-48"
            />
          </View>
        </View>
      </View>
      <View>
        <Text className="text-5xl font-semibold text-center">
          Trivia Game Quiz
        </Text>
        <Text className="text-base text-gray-500 text-center">
          Perfect game to challenge your
        </Text>
        <Text className="text-base text-gray-500 text-center">
          friends and have hours of fun!
        </Text>
      </View>
      <View className="flex flex-row items-center">
        <Avatar
          rounded
          source={{
            uri: lastAvatar?.avatar?.image
          }}
          size={80}
          containerStyle={{
            borderColor: "black",
            borderWidth: 1,
            marginHorizontal: 10
          }}
          onPress={toggleAvatarModal}
        />
        <Button
          title="Start Game"
          buttonStyle={{
            backgroundColor: "darkorange",
            borderRadius: 50,
            borderColor: "black",
            paddingVertical: 15,
            width: "70%",
          }}
          titleStyle={{
            color: "white",
            fontSize: 20,
          }}
          containerStyle={{
            width: "100%",
          }}
          onPress={handleStartGame}
        />
      </View>
      <AvatarModal
        modalVisible={avatarModalVisible}
        toggleModal={toggleAvatarModal}
        setSelectedAvatar={setSelectedAvatar}
      />
      <DiamondModal
        modalVisible={diamondModalVisible}
        toggleModal={toggleDiamondModal}
        setSelectedDiamond={setSelectedDiamond}
      />
    </View>
  );
}
