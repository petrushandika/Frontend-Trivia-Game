import axios from "axios";
import CONFIG from "../config/config";
import LOCAL_STORAGE from "./storage";

const API = {
  AVATAR: {
    GET_ALL_AVATAR: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/avatar`);
        return response.data;
      } catch (error) {
        console.error("Error fetching avatars:", error);
        throw error;
      }
    },

    GET_ONE_AVATAR: async (id: number) => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/avatar/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching avatars:", error);
        throw error;
      }
    },
  },

  PAYMENT: {
    CREATE: async () => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/midtrans`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error creating invoice:", error);
        throw error;
      }
    },
  },

  DIAMOND_PACKAGE: {
    GET_ALL_PACKAGE: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/diamond-package`);
        return response.data;
      } catch (error) {
        console.error("Error fetching avatars:", error);
        throw error;
      }
    },

    GET_ONE_PACKAGE: async (id: number) => {
      try {
        const response = await axios.get(
          `${CONFIG.BASE_URL}/diamond-package/${id}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching avatars:", error);
        throw error;
      }
    },
  },
};

export default API;
