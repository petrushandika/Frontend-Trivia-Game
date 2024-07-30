import React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from '@rneui/themed';
import { Button } from 'react-native-elements';

const barImage = require('../../assets/images/bar.png');

export default function WinnerScreen() {
    return (
        <View className='h-full p-5 bg-gray-800 flex justify-center'>
            <View className='flex items-center my-10'>
                <Text className='text-white text-3xl'>Congrats,</Text>
                <Text className='text-white text-3xl'>you got 1 diamond</Text>
            </View>
            <Avatar
                size="medium"
                rounded
                source={{
                    uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
                }}
            />
            <View className='relative w-full h-64 my-5'>
                <Image
                    source={barImage}
                    className='w-full h-full'
                    resizeMode="contain"
                />
                <View className='absolute bottom-0 left-0 right-0 top-40 bg-white h-3/4 items-center justify-center rounded p-5 gap-y-1'>
                    <View className='flex flex-row items-center justify-between rounded w-full p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <Avatar
                            size="medium"
                            rounded
                            source={{
                                uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
                            }}
                        />
                        <Text className='text-white text-xl ml-3'>Boy Simbolon</Text>
                        <Text className='text-white text-xl'>5041</Text>
                    </View>
                    <View className='flex flex-row items-center justify-between rounded w-full p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <Avatar
                            size="medium"
                            rounded
                            source={{
                                uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
                            }}
                        />
                        <Text className='text-white text-xl ml-3'>Boy Simbolon</Text>
                        <Text className='text-white text-xl'>5041</Text>
                    </View>
                </View>
            </View>
            <View className='flex flex-row gap-x-3 justify-center mt-24'>
                <Button
                    title="Return to Home"
                    buttonStyle={{
                        backgroundColor: "red",
                        borderRadius: 10
                    }}
                />
                <Button
                    title="Play Again"
                    buttonStyle={{
                        backgroundColor: "green",
                        borderRadius: 10
                    }}
                />
            </View>
        </View>
    );
}
