import axios from "axios"; 
import CONFIG from "../config/config"; 
 
const API = { 
  AVATAR: { 
    GET_ALL: async () => { 
      try { 
        const response = await axios.get(`${CONFIG.BASE_URL}/avatar`); 
        console.log(response.data); 
        return response.data; 
      } catch (error) { 
        console.error("Error fetching avatars:", error); 
        throw error; 
      } 
    }, 
 
    GET_ALL_BY_ID: async () => { 
      try { 
        const response = await axios.get(`${CONFIG.BASE_URL}/avatar/id`); 
        console.log(response.data); 
        return response.data; 
      } catch (error) { 
        console.error("Error fetching avatars:", error); 
        throw error; 
      } 
    }, 
  }, 
}; 
 
export default API;