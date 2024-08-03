import axios from "axios";
import CONFIG from "../config/config";
import { CreateInvoiceDto } from "@/dto/InvoiceDto";
import LOCAL_STORAGE from "./storage";

const API = {
  AVATAR: {
    GET_ALL: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/avatar`);
        return response.data;
      } catch (error) {
        console.error("Error fetching avatars:", error);
        throw error;
      }
    },

    GET_ALL_BY_ID: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/avatar/id`);
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
};

export default API;
