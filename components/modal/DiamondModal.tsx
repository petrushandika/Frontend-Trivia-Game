import { useEffect, useState } from "react";
import { View, StyleSheet, Modal, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import API from "@/networks/api";
import { DiamondPackageDto } from "@/dto/DiamondPackageDto";
import { WebView } from "react-native-webview";

interface DiamondModalProps {
  modalVisible: boolean;
  toggleModal: () => void;
  setSelectedDiamond: (diamond: string) => void;
}

export default function DiamondModal({ modalVisible, toggleModal, setSelectedDiamond }: DiamondModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [diamondPackages, setDiamondPackages] = useState<DiamondPackageDto[]>([]);
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(null);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
      userId: "123",
      price: selectedPackage.price,
      quantity: selectedPackage.quantity
    };

    setLoading(true);

    try {
      const response = await API.PAYMENT.CREATE(paymentData);
      if (response.token) {
        const snapUrl = `https://app.sandbox.midtrans.com/snap/v4/redirection/${response.token}`;
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

  useEffect(() => {
    if (paymentUrl) {
      console.log(`WebView should load URL: ${paymentUrl}`);
    }
  }, [paymentUrl]);

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
              <View style={styles.webview}>
                <WebView
                  source={{ uri: paymentUrl }}
                  style={styles.webview}
                  onError={(syntheticEvent) => {
                    const { nativeEvent } = syntheticEvent;
                    console.warn('WebView error: ', nativeEvent);
                  }}
                  onLoadEnd={() => setLoading(false)}
                  onHttpError={(syntheticEvent) => {
                    const { nativeEvent } = syntheticEvent;
                    console.warn('WebView received HTTP error: ', nativeEvent.statusCode);
                  }}
                />
              </View>
            ) : (
              <>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
                </ScrollView>
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
                      handlePayment();
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
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "center",
    borderRadius: 20,
    elevation: 5,
    width: '90%',
    height: '50%',
  },
  diamondGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 2,
    paddingHorizontal: 25,
    paddingVertical: 0,
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
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
    borderRadius: 20,
  },
  loader: {
    marginTop: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
