import React, { useState } from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import { Button, Avatar } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "@rneui/themed";

interface DialogComponentProps {}

export default function AvaModal<DialogComponentProps>() {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Open Multi Action Dialog"
        onPress={toggleModal}
        buttonStyle={styles.button}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.avatarGrid}>
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} containerStyle={styles.card}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <View style={styles.avatarContainer}>
                      <Avatar
                        size="medium"
                        rounded
                        source={{
                          uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
                        }}
                      />
                    </View>
                    <Text style={styles.avatarText}>Free</Text>
                  </TouchableOpacity>
                </Card>
              ))}
            </View>
            <View style={styles.actionsContainer}>
              <Button
                title="Cancel"
                buttonStyle={styles.cancelButton}
                onPress={toggleModal}
              />
              <Button
                title="Save"
                buttonStyle={styles.saveButton}
                onPress={toggleModal}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20,
  },
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
    backgroundColor: "#a5a4d7",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
    justifyContent: "center",
  },
  avatarContainer: {
    alignItems: "center",
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
  avatarText: {
    color: 'yellow',
    textAlign: 'center',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#aec4e1',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1, 
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
  },
});
