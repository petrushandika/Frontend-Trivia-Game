import AsyncStorage from "@react-native-async-storage/async-storage";

export const getGoogleId = async (): Promise<string | null> => {
  try {
    const googleId = await AsyncStorage.getItem("googleId");
    return googleId;
  } catch (error) {
    console.error("Failed to fetch Google ID:", error);
    return null;
  }
};
