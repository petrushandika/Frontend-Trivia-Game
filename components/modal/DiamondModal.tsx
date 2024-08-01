import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";

export default function DiamondModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Open Diamond Options"
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
            <View style={styles.diamondGrid}>
              <TouchableOpacity
                style={[
                  styles.imageContainer,
                  selectedImage === "100d" && styles.selectedImageContainer
                ]}
                onPress={() => handleImageClick("100d")}
              >
                <Image source={require("../../assets/images/100d.png")} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.imageContainer,
                  selectedImage === "250d" && styles.selectedImageContainer
                ]}
                onPress={() => handleImageClick("250d")}
              >
                <Image source={require("../../assets/images/250d.png")} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.imageContainer,
                  selectedImage === "500d" && styles.selectedImageContainer
                ]}
                onPress={() => handleImageClick("500d")}
              >
                <Image source={require("../../assets/images/500d.png")} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.imageContainer,
                  selectedImage === "1000d" && styles.selectedImageContainer
                ]}
                onPress={() => handleImageClick("1000d")}
              >
                <Image source={require("../../assets/images/1000d.png")} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.imageContainer,
                  selectedImage === "5000d" && styles.selectedImageContainer
                ]}
                onPress={() => handleImageClick("5000d")}
              >
                <Image source={require("../../assets/images/5000d.png")} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.imageContainer,
                  selectedImage === "10000d" && styles.selectedImageContainer
                ]}
                onPress={() => handleImageClick("10000d")}
              >
                <Image source={require("../../assets/images/10000d.png")} style={styles.image} />
              </TouchableOpacity>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: '90%',
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    elevation: 10,
  },
  diamondGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedImageContainer: {
    borderColor: "#ffab00", // Bright yellow for selection
  },
  image: {
    width: 80,
    height: 80,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  saveButton: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
