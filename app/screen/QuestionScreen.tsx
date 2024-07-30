import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, LinearProgress } from 'react-native-elements';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import 'nativewind';

const QuestionScreen = () => {
    const [press, setPress] = useState<string | null>(null);

    const handlePress = (buttonName: string) => {
        setPress(buttonName);
    };

    const handleRelease = () => {
        setPress(null);
    };

    return (
        <View className='h-full p-5 bg-gray-800'>
            <View className='flex my-auto rounded p-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View className='flex flex-row justify-end gap-3 mb-10'>
                    <FontAwesome6 name="crown" size={30} color="yellow" />
                    <Text className='text-white text-3xl'>2481</Text>
                </View>
                <View className='flex gap-y-5 mb-14'>
                    <Text className='text-green-300 text-3xl text-center'>00 : 18</Text>
                    <Text className='text-white text-xl text-center'>Blackpink's first single song in 2016 is known as</Text>
                </View>
                <View className='flex gap-y-5'>
                    <Button
                        title="Boom Ba Yah"
                        buttonStyle={{
                            backgroundColor: press === 'Boom Ba Yah' ? 'green' : 'white',
                            borderRadius: 10,
                            borderColor: 'black',
                            paddingVertical: 10,
                        }}
                        titleStyle={{
                            color: press === 'Boom Ba Yah' ? 'white' : 'black',
                            fontSize: 20,
                        }}
                        onPressIn={() => handlePress('Boom Ba Yah')}
                        onPressOut={handleRelease}
                    />
                    <Button
                        title="Bang Bang Bang"
                        buttonStyle={{
                            backgroundColor: press === 'Bang Bang Bang' ? 'red' : 'white',
                            borderRadius: 10,
                            borderColor: 'black',
                            paddingVertical: 10,
                        }}
                        titleStyle={{
                            color: press === 'Bang Bang Bang' ? 'white' : 'black',
                            fontSize: 20,
                        }}
                        onPressIn={() => handlePress('Bang Bang Bang')}
                        onPressOut={handleRelease}
                    />
                    <Button
                        title="Everything"
                        buttonStyle={{
                            backgroundColor: 'white',
                            borderRadius: 10,
                            borderColor: 'black',
                            paddingVertical: 10,
                        }}
                        titleStyle={{
                            color: 'black',
                            fontSize: 20,
                        }}
                    />
                    <Button
                        title="Aloha"
                        buttonStyle={{
                            backgroundColor: 'white',
                            borderRadius: 10,
                            borderColor: 'black',
                            paddingVertical: 10,
                        }}
                        titleStyle={{
                            color: 'black',
                            fontSize: 20,
                        }}
                    />
                </View>
                <View className='mt-12'>
                    <Text className='text-white text-center mb-1'>4/20 Question</Text>
                    <LinearProgress color="primary" />
                </View>
            </View>
        </View>
    );
}

export default QuestionScreen;
