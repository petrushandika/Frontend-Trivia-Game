import React, { useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import Modal from 'react-native-modal';

// Dummy data with unique IDs and sorted by price
const diamondPackages = [
  { id: 1, amount: 100, price: "$1.99", image: "https://png.pngtree.com/png-clipart/20220822/ourmid/pngtree-game-gems-bag-ui-icon-png-png-image_6120206.png" },
  { id: 2, amount: 500, price: "$4.99", image: "https://previews.123rf.com/images/emojiimage/emojiimage1802/emojiimage180200329/95468322-large-brown-bag-full-of-valuable-stones-diamonds-sapphires-and-rubies-cartoon-gemstones-flat-vector.jpg" },
  { id: 3, amount: 1000, price: "$9.99", image: "https://media.istockphoto.com/id/1335316934/tr/vekt%C3%B6r/bag-with-crystal-stones-in-cartoon-style-isolated-on-white-background-ui-game-asset-sack.jpg?s=612x612&w=0&k=20&c=O3LUVMs04X7zMavrsqju8_bo6vmdXx-mixqrf_x6NKM=" },
  { id: 4, amount: 2500, price: "$19.99", image: "https://img.freepik.com/premium-vector/vector_863384-155.jpg" },
  { id: 5, amount: 5000, price: "$39.99", image: "https://st2.depositphotos.com/4155807/6227/v/950/depositphotos_62271937-stock-illustration-bag-with-gems.jpg" },
];

export default function DiamondShop() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ amount: 0, price: "" });

  const handlePurchase = (packageId: number) => {
    const purchasedPackage = diamondPackages.find(pkg => pkg.id === packageId);

    if (purchasedPackage) {
      setModalContent({
        amount: purchasedPackage.amount,
        price: purchasedPackage.price,
      });
      setModalVisible(true);
    } else {
      setModalContent({
        amount: 0,
        price: "Error",
      });
      setModalVisible(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/images/triviagame.png")}
        style={styles.logo}
      />
      <View style={styles.packagesContainer}>
        {diamondPackages.map((pkg) => (
          <View key={pkg.id} style={styles.packageCard}>
            <Image source={{ uri: pkg.image }} style={styles.packageImage} />
            <Text style={styles.packageAmount}>{pkg.amount} 💎</Text>
            <Button
              title={`${pkg.price}`}
              buttonStyle={styles.buyButton}
              onPress={() => handlePurchase(pkg.id)}
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
            {modalContent.amount > 0
              ? `You have purchased ${modalContent.amount} diamonds for ${modalContent.price}!`
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
    backgroundColor: "#FF7A00", // Light orange background
    padding: 20,
  },
  logo: {
    width: 180,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00796b", // Teal color for contrast
    textAlign: 'center',
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
  packageAmount: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#00796b", // Teal color for contrast
  },
  packagePrice: {
    fontSize: 18,
    color: "#00796b", // Teal color for contrast
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
