import { useEffect, useState } from "react";
import { View, StyleSheet, Modal, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { Button } from "@rneui/themed";
import API from "@/networks/api";
import { DiamondPackageDto } from "@/dto/DiamondPackageDto";
import { WebView } from "react-native-webview";

export default function DiamondModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [diamondPackages, setDiamondPackages] = useState<DiamondPackageDto[]>([]);
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(null);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handlePurchase = (id: number) => {
    setSelectedPackageId(id);
  };

  const handlePayment = async () => {
    if (!selectedPackageId) {
      console.error("No package selected");
      return;
    }

    const selectedPackage = diamondPackages.find(pkg => pkg.id === selectedPackageId);

    if (!selectedPackage) {
      console.error("Selected package not found");
      return;
    }

    const paymentData = {
      userId: "",
      price: selectedPackage.price,
      quantity: 1,
    };

    setLoading(true);

    try {
      const response = await API.PAYMENT.CREATE(paymentData);
      if (response.token) {
        const snapUrl = `https://app.sandbox.midtrans.com/snap/v3/redirection/${response.token}`;
        console.log("Payment response:", response);
        console.log("Snap URL:", snapUrl);
        setPaymentUrl(snapUrl);
      }
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function GET_PACKAGE() {
      try {
        const response = await API.DIAMOND_PACKAGE.GET_ALL_PACKAGE();
        setDiamondPackages(response);
      } catch (error) {
        console.error("Error fetching diamond packages:", error);
      }
    }

    GET_PACKAGE();
  }, []);

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
            {paymentUrl ? (
              <WebView
                source={{ uri: paymentUrl }}
                style={styles.webview}
                onLoadEnd={() => setLoading(false)}
              />
            ) : (
              <>
                <View style={styles.diamondGrid}>
                  {diamondPackages.map((diamondPackage) => (
                    <TouchableOpacity
                      key={diamondPackage.id}
                      style={[
                        styles.packageCard,
                        selectedImage === diamondPackage.image && styles.selectedImageContainer
                      ]}
                      onPress={() => handleImageClick(diamondPackage.image)}
                    >
                      <Image source={{ uri: diamondPackage.image }} style={styles.packageImage} />
                      <Text style={styles.packageQuantity}>{diamondPackage.quantity} 💎</Text>
                      <Button
                        title={`Rp. ${diamondPackage.price}`}
                        buttonStyle={styles.buyButton}
                        onPress={() => handlePurchase(diamondPackage.id)}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.actionsContainer}>
                  <Button
                    title="Cancel"
                    buttonStyle={styles.cancelButton}
                    onPress={toggleModal}
                  />
                  <Button
                    title="Buy"
                    buttonStyle={styles.saveButton}
                    onPress={() => {
                      toggleModal(); // Close the modal
                      handlePayment(); // Trigger the payment process
                    }}
                  />
                </View>
              </>
            )}
            {loading && (
              <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
            )}
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
    width: '90%',
    height: '80%',
  },
  diamondGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 2,
    padding: 0,
  },
  packageCard: {
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
  packageImage: {
    width: 80,
    height: 80,
  },
  packageQuantity: {
    marginTop: 5,
  },
  buyButton: {
    marginTop: 10,
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
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  loader: {
    marginTop: 20,
  },
});
