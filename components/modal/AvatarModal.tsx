import { useEffect, useState } from "react";
import { View, StyleSheet, Modal, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import API from "@/networks/api";
import { AvatarDto } from "@/dto/AvatarDto";
import usePurchaseAvatar from "@/hooks/usePurchaseAvatar";
import useFetchProfile from "@/hooks/useFetchProfile";

interface AvatarModalProps {
  modalVisible: boolean;
  toggleModal: () => void;
  setSelectedAvatar: (avatar: string) => void;
}

export default function AvatarModal({ modalVisible, toggleModal, setSelectedAvatar }: AvatarModalProps) {
  const [localSelectedAvatar, setLocalSelectedAvatar] = useState<number | null>(null);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [avatars, setAvatars] = useState<AvatarDto[]>([]);

  const { profile } = useFetchProfile()

  const handleAvatarClick = (avatarId: number, diamond: number | string, image: string) => {
    if (typeof diamond === "number" && diamond > profile.diamond) {
      setAlertVisible(true);
    } else {
      setLocalSelectedAvatar(avatarId);
    }
  };

  const { mutateAsync } = usePurchaseAvatar();

  const sortedAvatars: AvatarDto[] = [...avatars].sort((a: AvatarDto, b: AvatarDto) => {
    const priceA = a.diamond == null ? 0 : Number(a.diamond);
    const priceB = b.diamond == null ? 0 : Number(b.diamond);
    return priceA - priceB;
  });

  const handleSave = async () => {
    if (localSelectedAvatar !== null) {
      const selectedAvatarImage = sortedAvatars.find(avatar => avatar.id === localSelectedAvatar)?.image;
      if (selectedAvatarImage) {
        setSelectedAvatar(selectedAvatarImage);
      }
      console.log('avatarId', localSelectedAvatar);
      try {
        await mutateAsync({
          avatarId: localSelectedAvatar,
        });
      } catch (error) {
        console.error("Error purchasing avatar:", error);
      }
    }
    toggleModal();
  };

  const handleNo = () => {
    setAlertVisible(false);
  };

  useEffect(() => {
    async function GET_AVATAR() {
      try {
        const response = await API.AVATAR.GET_ALL_AVATAR();
        setAvatars(response);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    }
    GET_AVATAR();
  }, []);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={styles.avatarGrid}>
                {sortedAvatars.map((avatar) => (
                  <TouchableOpacity
                    key={avatar.id}
                    style={[
                      styles.avatarCard,
                      localSelectedAvatar === avatar.id && styles.selectedImageContainer,
                    ]}
                    onPress={() => handleAvatarClick(avatar.id, avatar.diamond || "Free", avatar.image)}
                  >
                    <Image
                      source={{ uri: avatar.image }}
                      style={styles.avatarImage}
                    />
                    <View style={styles.avatarInfo}>
                      <Text style={styles.avatarPrice}>{avatar.diamond == 0 ? 'Free' : avatar.diamond}</Text>
                      {avatar.diamond != 0 && (
                        <Image
                          source={require("../../assets/images/diamond.png")}
                          style={styles.diamondIcon}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
            <View style={styles.actionsContainer}>
              <Button
                title="Cancel"
                buttonStyle={styles.cancelButton}
                onPress={toggleModal}
              />
              <Button
                title="Save"
                buttonStyle={styles.saveButton}
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
        <View style={styles.centeredView}>
          <View style={styles.alertView}>
            <TouchableOpacity onPress={handleNo}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9587/9587077.png' }}
                style={styles.alertImage}
              />
            </TouchableOpacity>
            <Text style={styles.alertTitle}>Oops!</Text>
            <Text style={styles.alertMessage}>You don't have enough diamonds. Please visit the shop to buy more!</Text>
            {/* <View style={styles.alertActions}>
              <Button
                title="Go to Shop"
                buttonStyle={styles.alertButton}
                onPress={handleYes}
              />
              <Button
                title="No"
                buttonStyle={styles.alertButton}
                onPress={handleNo}
              />
            </View> */}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    height: "60%",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Adjusts spacing between items
    paddingHorizontal: 10,
  },
  avatarCard: {
    alignItems: "center",
    width: '45%', // Adjust width for two items per row
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  selectedImageContainer: {
    borderColor: "yellow",
    borderWidth: 3,
    borderRadius: 10,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  avatarInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  avatarPrice: {
    color: '#333',
  },
  diamondIcon: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
  actionsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    gap: 20,
  },
  cancelButton: {
    backgroundColor: "red",
    borderRadius: 10,
    width: 120,
  },
  saveButton: {
    backgroundColor: "green",
    borderRadius: 10,
    width: 120,
  },
  alertView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  alertImage: {
    width: 50,
    height: 50,
    marginBottom: 15,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  alertMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  alertActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
  },
  alertButton: {
    borderRadius: 10,
    width: 120,
  },
});
