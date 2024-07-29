
import { Text, View, Image, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

function Question() {
    return (
        <View className='h-full mt-20 p-10'>
            <View className='flex flex-row justify-between'>
                <Text className='text-white text-3xl'>17</Text>
                <View className='flex flex-row items-center gap-3'>
                    <FontAwesome6 name="champagne-glasses" size={30} color="black" className="text-yellow-400" />
                    <Text className='text-white text-3xl'>2481</Text>
                </View>
            </View>
            <View className='my-5'>
                <Image
                    source={require('../../assets/images/person.jpeg')}
                    className='w-full rounded-xl'
                />
            </View>
            <View className='flex gap-3'>
                <TouchableOpacity className='bg-white shadow py-3 rounded-xl'>
                    <Text className='text-black text-center text-xl'>Lee Thai</Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-white shadow py-3 rounded-xl'>
                    <Text className='text-black text-center text-xl'>Jimin</Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-white shadow py-3 rounded-xl'>
                    <Text className='text-black text-center text-xl'>Oh Suggi</Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-white shadow py-3 rounded-xl'>
                    <Text className='text-black text-center text-xl'>Taehyun</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Question;
