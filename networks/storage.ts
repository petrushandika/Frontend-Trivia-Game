import AsyncStorage from "@react-native-async-storage/async-storage"

const ASYNC_STORAGE = {
  SET: (token: string) => {
    return AsyncStorage.setItem("token", token);
  },

  GET: () => {
    return AsyncStorage.getItem("token");
  },

  REMOVE: () => {
    return AsyncStorage.removeItem("token");
  },
};

export default ASYNC_STORAGE;
