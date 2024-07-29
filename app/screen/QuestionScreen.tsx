import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Button } from 'react-native-elements';

function Question() {
    const [pressedButton, setPressedButton] = useState<string | null>(null);

    const handlePress = (buttonName: string) => {
        setPressedButton(buttonName);
    };

    const handleRelease = () => {
        setPressedButton(null);
    };

    return (
        <View className='h-full mt-20 p-10'>
            <View className='flex flex-row justify-between'>
                <Text className='text-white text-3xl'>17</Text>
                <View className='flex flex-row items-center gap-3'>
                    <FontAwesome6 name="crown" size={30} color="yellow" />
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
                <Button
                    title="Lee Tai"
                    buttonStyle={{
                        backgroundColor: pressedButton === 'Lee Tai' ? 'green' : 'white',
                        borderRadius: 10,
                        borderColor: 'black',
                        paddingVertical: 10,
                    }}
                    titleStyle={{
                        color: pressedButton === 'Lee Tai' ? 'white' : 'black',
                        fontSize: 20
                    }}
                    onPressIn={() => handlePress('Lee Tai')}
                    onPressOut={handleRelease}
                />
                <Button
                    title="Jimin"
                    buttonStyle={{
                        backgroundColor: pressedButton === 'Jimin' ? 'red' : 'white',
                        borderRadius: 10,
                        borderColor: 'black',
                        paddingVertical: 10,
                    }}
                    titleStyle={{
                        color: pressedButton === 'Jimin' ? 'white' : 'black',
                        fontSize: 20
                    }}
                    onPressIn={() => handlePress('Jimin')}
                    onPressOut={handleRelease}
                />
                <Button
                    title="Oh Suggi"
                    buttonStyle={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        borderColor: 'black',
                        paddingVertical: 10,
                    }}
                    titleStyle={{
                        color: 'black',
                        fontSize: 20
                    }}
                />
                <Button
                    title="Taehyun"
                    buttonStyle={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        borderColor: 'black',
                        paddingVertical: 10,
                    }}
                    titleStyle={{
                        color: 'black',
                        fontSize: 20
                    }}
                />
            </View>
        </View>
    );
}

export default Question;
