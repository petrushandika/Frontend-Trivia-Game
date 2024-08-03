import { useEffect, useState } from "react";
import { View, StyleSheet, Modal, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";
import API from "@/networks/api";

export default function DiamondModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    async function GET_PAYMENT() {
      const response = await API.PAYMENT.CREATE()
      return response.data;
    }
    GET_PAYMENT()
  }, [])

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
  diamondGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 2,
    padding: 0,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 7,
    padding: 1,
    marginHorizontal: 2,
    borderRadius: 10,
  },
  selectedImageContainer: {
    borderColor: "yellow",
    borderWidth: 3,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
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
