import CONFIG from '@/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQueryClient, useMutation} from '@tanstack/react-query'
import axios from 'axios';


export default function usePurchaseAvatar() {
    const queryClient = useQueryClient();
    const {mutateAsync} = useMutation({
        mutationFn: async (data: any) => {
            const token = await AsyncStorage.getItem("token");
            const response = await axios.post(`${CONFIG.BASE_URL}/user/buy-avatar/${data.avatarId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile"] });
        },
        onError: (error) => {
            console.log(error.message);
        },
    });
    return {mutateAsync};    
}