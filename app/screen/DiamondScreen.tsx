import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import Modal from 'react-native-modal';
import API from "@/networks/api";
import { DiamondPackageDto } from "@/dto/DiamondPackageDto";

export default function DiamondScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ quantity: 0, price: "" });
  const [diamondPackages, setDiamondPackages] = useState<DiamondPackageDto[]>([]);

  const handlePurchase = (packageId: number) => {
    const purchasedPackage = diamondPackages.find(diamondPackage => diamondPackage.id === packageId);

    if (purchasedPackage) {
      setModalContent({
        quantity: purchasedPackage.quantity,
        price: purchasedPackage.price.toString(),
      });
      setModalVisible(true);
    } else {
      setModalContent({
        quantity: 0,
        price: "Error",
      });
      setModalVisible(true);
    }
  };

  useEffect(() => {
    async function GET_PACKAGE() {
      const response = await API.DIAMOND_PACKAGE.GET_ALL_PACKAGE();
      setDiamondPackages(response);
    }

    GET_PACKAGE()
  }, []);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/images/triviagame.png")}
        style={styles.logo}
      />
      <View style={styles.packagesContainer}>
        {diamondPackages.map((diamondPackage) => (
          <View key={diamondPackage.id} style={styles.packageCard}>
            <Image source={{ uri: diamondPackage.image }} style={styles.packageImage} />
            <Text style={styles.packageQuantity}>{diamondPackage.quantity} 💎</Text>
            <Button
              title={`Rp. ${diamondPackage.price}`}
              buttonStyle={styles.buyButton}
              onPress={() => handlePurchase(diamondPackage.id)}
            />
          </View>
        ))}
      </View>

      {/* Modal Component */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Purchase Confirmed</Text>
          <Text style={styles.modalMessage}>
            {modalContent.quantity > 0
              ? `You have purchased ${modalContent.quantity} diamonds for Rp. ${modalContent.price}!`
              : "Package not found."}
          </Text>
          <Button
            title="Continue"
            buttonStyle={styles.modalButton}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF7A00",
    padding: 20,
  },
  logo: {
    width: 180,
    height: 120,
    marginBottom: 20,
  },
  packagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  packageCard: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 5,
    padding: 15,
    margin: 10,
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  packageImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  packageQuantity: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#00796b",
  },
  buyButton: {
    backgroundColor: "#008001",
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: 300,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796b',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#00796b',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
