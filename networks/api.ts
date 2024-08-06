import axios from "axios";
import CONFIG from "../config/config";
import ASYNC_STORAGE from "./storage";

const API = {
  USER: {
    GET_ONE_USER: async (id: number) => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/user/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
      }
    },
  },

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
        console.error("Error fetching avatar:", error);
        throw error;
      }
    },
  },

  PAYMENT: {
    CREATE: async (paymentData: any) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/payment/create`,
          paymentData
          // {
          //   headers: {
          //     Authorization: `Bearer ${ASYNC_STORAGE.GET()}`,
          //   },
          // }
        );
        return response.data;
      } catch (error) {
        console.error("Error creating payment:", error);
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
        console.error("Error fetching diamond packages:", error);
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
        console.error("Error fetching diamond package:", error);
        throw error;
      }
    },
  },

  QUESTION: {
    GET_ALL: async () => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/questions`, {
          headers: {
            Authorization: `Bearer ${ASYNC_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error creating invoice:", error);
        throw error;
      }
    },
    GET_BY_ID: async (id: number) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/questions/${id}`,
          {
            headers: {
              Authorization: `Bearer ${ASYNC_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error creating invoice:", error);
        throw error;
      }
    },
  },
};

export default API;
