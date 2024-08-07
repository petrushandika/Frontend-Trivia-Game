import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import CONFIG from "@/config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useFetchProfile() {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        console.log('ini token dari hook', token);
        if (!token) throw new Error("Token not found");
        const response = await axios.get(`${CONFIG.BASE_URL}/user/getUser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return response.data;
      } catch (error) {
        if (error instanceof AxiosError)
          throw new Error(error.response?.data.message);
      }
    },
  });

  return { profile };
}
