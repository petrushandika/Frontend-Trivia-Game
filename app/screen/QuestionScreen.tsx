import { View, Text } from 'react-native'
import { Button, Image, LinearProgress } from 'react-native-elements';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

export default function QuestionScreen({ navigation }: { navigation: any }) {
    const [press, setPress] = useState<string | null>(null);

    const handlePress = (buttonName: string) => {
        setPress(buttonName);
    };

    const handleRelease = () => {
        setPress(null);
    };


    return (
        <View className='mt-10 p-5 h-full bg-blue-400'>
            <View className='gap-y-10'>
                <View className='flex flex-row justify-between p-5 rounded-full'>
                    <View className='flex flex-row items-center gap-x-3'>
                        <FontAwesome6 name="crown" size={20} color="yellow" />
                        <Text className='text-white text-xl'>2481</Text>
                    </View>
                    <View className='items-center'>
                        <Text className='text-white text-xl'>00 : 18</Text>
                    </View>
                    <View className='bottom-0 right-0'>
                        <AntDesign
                            name="closecircle"
                            size={25}
                            color="white"
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                </View>
                <View className='items-center'>
                    <Image
                        source={require('../../assets/images/book.png')}
                        style={{
                            width: 150,
                            height: 150,
                        }} />
                    <Text className='text-white text-xl'>Question 5 of 20</Text>
                    <Text className='text-white text-3xl font-medium'>Blackpink's first single song in 2016 is known as</Text>
                </View>
                <View className='flex gap-y-5'>
                    <Button
                        title="Boom Ba Yah"
                        buttonStyle={{
                            backgroundColor: press === 'Boom Ba Yah' ? 'green' : 'white',
                            borderRadius: 100,
                            borderColor: 'black',
                            paddingVertical: 15,
                            marginVertical: 10
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
                            borderRadius: 100,
                            borderColor: 'black',
                            paddingVertical: 15,
                            marginVertical: 10
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
                            borderRadius: 100,
                            borderColor: 'black',
                            paddingVertical: 15,
                            marginVertical: 10
                        }}
                        titleStyle={{
                            color: 'black',
                            fontSize: 20,
                        }}
                    />
                </View>
                {/* <View>
                    <Text className='text-black text-center mb-1 text-base'>Question 1 of 20</Text>
                    <LinearProgress color="darkorange" />
                </View> */}
            </View>
        </View>
    )
}