import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import datas from "../../data/data.json";
import CardList from '../../components/CardList';

export default function WinnerScreen() {
    return (
        <ScrollView className='mt-20'>
            <View className='flex items-center mb-10'>
                <Text className='text-white text-3xl'>Congrats,</Text>
                <Text className='text-white text-3xl'>you got 1 diamond</Text>
            </View>
            <View className='flex gap-3'>
                {datas.map((data, index) => (
                    <CardList
                        key={index}
                        image={data.image}
                        name={data.name}
                        score={data.price}
                    />
                ))}
            </View>
            <View className='flex flex-row gap-3 justify-center mt-10'>
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
        </ScrollView>
    );
}
