import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import datas from "../../data/data.json";
import CardList from '../../components/CardList';


export default function LooserScreen() {
    return (
        <View className='mt-20'>
            <View className='flex items-center mb-10'>
                <Text className='text-white text-3xl'>Upppss..</Text>
                <Text className='text-white text-3xl'>Better luck next time</Text>
            </View>
            <View className='flex'>
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