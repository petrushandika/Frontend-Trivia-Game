import { useState } from "react";
import { View, Modal, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Button } from "@rneui/themed";
import Data from "../../data/data.json";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

interface IAva {
  id: number;
  image: string;
  price: number | string;
}

interface AvatarModalProps {
  modalVisible: boolean;
  toggleModal: () => void;
  setSelectedAvatar: (avatar: string) => void;
}

export default function AvatarModal({ modalVisible, toggleModal, setSelectedAvatar }: AvatarModalProps) {
  const [localSelectedAvatar, setLocalSelectedAvatar] = useState<number | null>(null);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const userDiamonds = 0;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAvatarClick = (avatarId: number, price: number | string, image: string) => {
    if (typeof price === "number" && price > userDiamonds) {
      setAlertVisible(true);
    } else {
      setLocalSelectedAvatar(avatarId);
    }
  };

  const sortedAvatars: IAva[] = [...Data].sort((a: IAva, b: IAva) => {
    const priceA = typeof a.price === "string" ? 0 : a.price;
    const priceB = typeof b.price === "string" ? 0 : b.price;
    return priceA - priceB;
  });

  const handleSave = () => {
    if (localSelectedAvatar !== null) {
      const selectedAvatarImage = sortedAvatars.find(avatar => avatar.id === localSelectedAvatar)?.image;
      if (selectedAvatarImage) {
        setSelectedAvatar(selectedAvatarImage);
      }
    }
    toggleModal();
  };

  const handleYes = () => {
    setAlertVisible(false);
    toggleModal();
    navigation.navigate("DiamondShop");
  };

  const handleNo = () => {
    setAlertVisible(false);
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View className="flex-1 justify-center items-center bg-transparent">
          <View className="m-5 bg-white p-5 items-center rounded-2xl shadow h-1/2 w-11/12">
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
              <View className="w-full flex-row flex-wrap justify-between">
                {sortedAvatars.map((avatar: IAva) => (
                  <TouchableOpacity
                    key={avatar.id}
                    className={`w-1/3 aspect-square items-center m-1 p-1 border ${localSelectedAvatar === avatar.id ? 'border-orange-500 border-2' : 'border-transparent'
                      } rounded-lg bg-gray-100`}
                    onPress={() => handleAvatarClick(avatar.id, avatar.price, avatar.image)}
                  >
                    <Avatar
                      size="large"
                      rounded
                      source={{ uri: avatar.image }}
                      containerStyle={{ width: "100%", aspectRatio: 1 }}
                    />
                    <View className="flex-row items-center mt-1">
                      <Text className="text-gray-800 text-center">{avatar.price === "Free" ? 'Free' : avatar.price}</Text>
                      {avatar.price !== "Free" && (
                        <Image
                          source={require("../../assets/images/diamond.png")}
                          className="w-4 h-4 ml-1"
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
            <View className="flex-row justify-center mt-5 w-full">
              <Button
                title="Cancel"
                buttonStyle={{ backgroundColor: "red", borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, marginRight: 10 }}
                onPress={toggleModal}
              />
              <Button
                title="Save"
                buttonStyle={{ backgroundColor: "green", borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, marginLeft: 10 }}
                onPress={handleSave}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Custom Alert Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={alertVisible}
        onRequestClose={() => setAlertVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="m-5 bg-white p-5 items-center rounded-2xl shadow w-4/5">
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9587/9587077.png' }}
              className="w-12 h-12 mb-2"
            />
            <Text className="text-xl font-bold mb-2">Oops!</Text>
            <Text className="text-center text-base mb-5">You don't have enough diamonds. Please visit the shop to buy more!</Text>
            <View className="flex-row justify-between w-full">
              <Button
                title="Go to Shop"
                buttonStyle={{ backgroundColor: "green", borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, marginRight: 10 }}
                onPress={handleYes}
              />
              <Button
                title="No"
                buttonStyle={{ backgroundColor: "red", borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, marginLeft: 10 }}
                onPress={handleNo}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
