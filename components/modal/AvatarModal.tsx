import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Button } from "@rneui/themed";
import Data from "../../data/data.json";

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
  const [alertVisible, setAlertVisible] = useState(false);
  const userDiamonds = 0;

  const handleAvatarClick = (avatarId: number, price: number | string, image: string) => {
    if (typeof price === "number" && price > userDiamonds) {
      setAlertVisible(true);
    } else {
      setLocalSelectedAvatar(avatarId);
    }
  };

  const sortedAvatars = [...Data].sort((a, b) => {
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
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <View style={styles.avatarGrid}>
                {sortedAvatars.map((avatar: IAva) => (
                  <TouchableOpacity
                    key={avatar.id}
                    style={[
                      styles.avatarContainer,
                      localSelectedAvatar === avatar.id && styles.selectedAvatar,
                    ]}
                    onPress={() => handleAvatarClick(avatar.id, avatar.price, avatar.image)}
                  >
                    <Avatar
                      size="large"
                      rounded
                      source={{ uri: avatar.image }}
                      containerStyle={styles.avatar}
                    />
                    <View style={styles.avatarInfo}>
                      <Text style={styles.avatarText}>{avatar.price === "Free" ? 'Free' : avatar.price}</Text>
                      {avatar.price !== "Free" && (
                        <Image
                          source={require("../../assets/images/diamond.png")}
                          style={styles.diamondImage}
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
        <View style={styles.alertCenteredView}>
          <View style={styles.alertModalView}>
          <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9587/9587077.png' }} // URL to your image
              style={styles.alertIcon}
            />
            <Text style={styles.alertTitle}>Oops!</Text>
            <Text style={styles.alertMessage}>You don't have enough diamonds. Please visit the shop to buy more!</Text>
            <Button
              title="OK"
              buttonStyle={styles.alertButton}
              onPress={() => setAlertVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    elevation: 5,
    height: "50%", // Adjust height proportionally
    width: "90%", // Adjust width to be smaller than screen

  },
  avatarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  avatarContainer: {
    width: "30%",
    aspectRatio: 1,
    alignItems: "center",
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10, // Rounded border
    backgroundColor: "#f8f8f8", // Light background color for avatar container
  },
  avatar: {
    width: "100%",
    aspectRatio: 1,
  },
  avatarInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  avatarText: {
    color: '#333',
    textAlign: 'center',
  },
  selectedAvatar: {
    borderColor: '#ff7a00',
    borderWidth: 2,
  },
  diamondImage: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
  },
  cancelButton: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10,
  },
  // Styles for the alert modal
  alertCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker semi-transparent background
  },
  alertModalView: {
    margin: 20,
    backgroundColor: "#fffae5", // Light yellow background
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10
  },
  alertIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  alertTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#ff5722", // Vibrant orange color
  },
  alertMessage: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  alertButton: {
    backgroundColor: "#ff5722", // Vibrant orange color
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});
