import React, { useState } from "react";
import { ScrollView, TextInput, View, Image, Modal, StyleSheet } from "react-native";
import { Text, Button } from "@rneui/themed";
import Feather from "@expo/vector-icons/Feather";
import Avatars from "@/components/avatar/avatar";

function CreateAva() {
  const inputAccessoryViewID = "uniqueID";
  const [name, setName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleName = () => {
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1 flex bg-black mt-10"
      >
        <View className="items-center mt-12">
          <Image
            source={require("../../assets/images/newname.png")}
            className="w-38 h-38"
          />
          <Text h4 className="text-white text-center mt-4" style={{color: "white", fontFamily: "sans-serif"}}>
            Create Your Avatar
          </Text>
          <Avatars />
          <View style={{ position: 'relative' }}>
            <TextInput
              className="p-4 pl-10 mt-1 max-w-md text-white border border-white rounded-lg h-[50px] w-[270px] bg-black"
              inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setName}
              value={name}
              placeholder={"Name"}
              placeholderTextColor={"white"}
            />
            <Feather 
              name="edit" 
              size={24} 
              color="white" 
              style={{ position: 'absolute', left: 10, top: 13 }} 
            />
          </View>

          <View style={{ padding: 20 }}>
            <Button
              title="Continue"
              buttonStyle={{
                backgroundColor: "#0acf83",
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 100,
              }}
              titleStyle={{
                color: "white",
                fontSize: 20,
              }}
              onPress={handleName}
            />
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Yeay! Selamat Datang {name}</Text>
            <Button
              title="Close"
              buttonStyle={{
                backgroundColor: "#2196F3",
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
              titleStyle={{
                color: "white",
                fontSize: 20,
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
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
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#0acf83",
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});

export default CreateAva;
