import { View, Text } from 'react-native'
import { Avatar, Button } from 'react-native-elements';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


export default function WinnerScreen() {
    return (
        <View className='mt-20'>
            <View className='flex items-center mb-10'>
                <Text className='text-white text-3xl'>Congrats,</Text>
                <Text className='text-white text-3xl'>you got 1 diamond</Text>
            </View>
            <View className='flex gap-3'>
                <View className='flex flex-row items-center'>
                    <Avatar
                        size={"large"}
                        rounded
                        source={{
                            uri:
                                'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
                        }}
                    />
                    <View className='ml-3'>
                        <Text className='text-white text-xl'>Petrus Handika</Text>
                        <View className='flex flex-row gap-2 items-center'>
                            <FontAwesome6 name='champagne-glasses' size={20} color='black' className='text-yellow-400' />
                            <Text className='text-white text-2xl'>2873</Text>
                        </View>
                    </View>
                </View>
                <View className='flex flex-row items-center'>
                    <Avatar
                        size={"large"}
                        rounded
                        source={{
                            uri:
                                'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
                        }}
                    />
                    <View className='ml-3'>
                        <Text className='text-white text-xl'>Petrus Handika</Text>
                        <View className='flex flex-row gap-2 items-center'>
                            <FontAwesome6 name='champagne-glasses' size={20} color='black' className='text-yellow-400' />
                            <Text className='text-white text-2xl'>2873</Text>
                        </View>
                    </View>
                </View>
                <View className='flex flex-row items-center'>
                    <Avatar
                        size={"large"}
                        rounded
                        source={{
                            uri:
                                'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
                        }}
                    />
                    <View className='ml-3'>
                        <Text className='text-white text-xl'>Petrus Handika</Text>
                        <View className='flex flex-row gap-2 items-center'>
                            <FontAwesome6 name='champagne-glasses' size={20} color='black' className='text-yellow-400' />
                            <Text className='text-white text-2xl'>2873</Text>
                        </View>
                    </View>
                </View>
                <View className='flex flex-row items-center'>
                    <Avatar
                        size={"large"}
                        rounded
                        source={{
                            uri:
                                'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
                        }}
                    />
                    <View className='ml-3'>
                        <Text className='text-white text-xl'>Petrus Handika</Text>
                        <View className='flex flex-row gap-2 items-center'>
                            <FontAwesome6 name='champagne-glasses' size={20} color='black' className='text-yellow-400' />
                            <Text className='text-white text-2xl'>2873</Text>
                        </View>
                    </View>
                </View>
                <View className='flex flex-row items-center'>
                    <Avatar
                        size={"large"}
                        rounded
                        source={{
                            uri:
                                'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
                        }}
                    />
                    <View className='ml-3'>
                        <Text className='text-white text-xl'>Petrus Handika</Text>
                        <View className='flex flex-row gap-2 items-center'>
                            <FontAwesome6 name='champagne-glasses' size={20} color='black' className='text-yellow-400' />
                            <Text className='text-white text-2xl'>2873</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View className='flex flex-row gap-3 justify-center mt-10'>
                <Button
                    title="Return to Home"
                    buttonStyle={{
                        backgroundColor: "red",
                    }}
                />
                <Button
                    title="Play Again"
                    buttonStyle={{
                        backgroundColor: "green"
                    }}
                />
            </View>
        </View>
    )
}