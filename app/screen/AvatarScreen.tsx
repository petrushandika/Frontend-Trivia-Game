import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "@rneui/themed";
import Feather from "@expo/vector-icons/Feather";
import ChooseAvatar from "../../components/avatar/ChooseAvatar";
import ErrorBoundary from "../../components/avatar/ErrorBoudary";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm, Field } from "@tanstack/react-form";
import useChooseAvatar from "@/hooks/useChooseAvatar";

function AvatarScreen({ navigation }: { navigation: any }) {
  const inputAccessoryViewID = "uniqueID";
  const [name, setName] = useState("");

  const { mutateAsync } = useChooseAvatar();

  const form = useForm({
    defaultValues: {
      username: "",
      id: 0,
    },
    onSubmit: (values) => {
      mutateAsync({
        username: values.value.username,
        avatarId: values.value.id
      })
      navigation.navigate('Home')
      // console.log(values.value.username, "ini id" + values.value.id);
    },
  });
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem("token");
  //       console.log('GET token dari avatar screen', jsonValue);
  //       return jsonValue != null ? JSON.parse(jsonValue) : null;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   getData()
  // }, [])

  return (
    <View className="m-auto justify-center">
      <View className="items-center">
        <Image source={require("../../assets/images/triviagame.png")} />
        <Text h4 style={styles.title}>
          Create Your Avatar
        </Text>
          <form.Field
            name="id"
            children={(field) => (
              <ErrorBoundary>
                <ChooseAvatar field={field} />
              </ErrorBoundary>
            )}
          />
          <View className="relative" style={styles.inputContainer}>
            <form.Field
              name="username"
              children={(field) => (
                <TextInput
                  className="w-80 p-4 pl-12 bg-white border-black border rounded-full "
                  inputAccessoryViewID={inputAccessoryViewID}
                  onChangeText={setName}
                  onChange={(e) => field.handleChange(e.nativeEvent.text)}
                  value={name}
                  placeholder={"Name"}
                  placeholderTextColor={"black"}
                />
              )}
            />
            <Feather name="edit" size={24} color="black" style={styles.icon} />
          </View>
          <View>
            <Button
              title="Save"
              buttonStyle={{
                backgroundColor: "#ff7a00",
                borderRadius: 100,
                paddingVertical: 13,
                width: 320,
                marginTop: 1,
              }}
              titleStyle={{
                color: "white",
                fontSize: 20,
              }}
              onPress={form.handleSubmit}
            />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    fontFamily: "sans-serif",
    marginTop: 1,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 20,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 13,
  },
});

export default AvatarScreen;
