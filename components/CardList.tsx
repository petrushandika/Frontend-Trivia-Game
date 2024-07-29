import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface CardListProps {
    image: string;
    name: string;
    score?: number;
    icon?: string;
}

export default function CardList({ image, name, score, icon }: CardListProps) {
    return (
        <View className='flex flex-row items-center mb-3'>
            <Avatar
                size="large"
                rounded
                source={{
                    uri: image,
                }}
            />
            <View className='ml-3'>
                <Text className='text-white text-xl'>{name}</Text>
                <View className='flex flex-row gap-2 items-center'>
                    <FontAwesome6
                        name={icon || 'crown'}
                        size={20}
                        color='yellow'
                    />
                    <Text className='text-white text-2xl'>{score}</Text>
                </View>
            </View>
        </View>
    );
}
