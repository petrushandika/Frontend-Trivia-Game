import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "@rneui/themed";
import Data from "../../data/data.json";
import { Button } from "@rneui/themed";


interface IAva {
  id: number;
  image: string;
  price: number;
}

export default function AvaModal<DialogComponentProps>() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const userDiamonds = 300;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleAvatarClick = (avatarId: number, cost: number) => {
    if (cost > userDiamonds) {
      alert("Your diamond does not enough, you have to buy at Shop");
    } else {
      setSelectedAvatar(avatarId);
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Open Multi Action Dialog"
        onPress={toggleModal}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Choose an Avatar</Text>
            <View style={styles.avatarGrid}>
              {Data.slice(0, 6).map((avatar: IAva) => (
                <TouchableOpacity
                  key={avatar.id}
                  style={[
                    styles.avatarContainer,
                    selectedAvatar === avatar.id && styles.selectedAvatar,
                  ]}
                  onPress={() => handleAvatarClick(avatar.id, avatar.price)}
                >
                  <Avatar
                    size="large"
                    rounded
                    source={{ uri: avatar.image }}
                  />
                  <Text style={styles.avatarText}>{avatar.price === 0 ? 'Free' : avatar.price}</Text>
                  {avatar.price > 0 && (
                    <Image
                      source={require("../../assets/images/diamont.png")}
                      style={styles.diamondImage}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.actionsContainer}>
              <Button
                title="Cancel"
                onPress={toggleModal}
                style={styles.cancelButton}
              />
              <Button
                title="Save"
                onPress={toggleModal}
                style={styles.saveButton}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgba(255, 122, 0, 0.7)",
    padding: 35,
    alignItems: "center",
    borderRadius: 20,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  avatarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    width: "100%",
  },
  avatarContainer: {
    alignItems: "center",
    marginVertical: 5,
    padding: 5,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  avatarText: {
    color: 'yellow',
    textAlign: 'center',
    marginTop: 5,
  },
  selectedAvatar: {
    borderColor: 'yellow',
    borderWidth: 2,
  },
  diamondImage: {
    width: 15,
    height: 15,
    marginLeft: 5,
    marginTop: 7,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  }
});
