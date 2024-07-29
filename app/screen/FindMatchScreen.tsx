import {View, Text, SafeAreaView} from 'react-native'
import {Avatar, Button} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function FindMatchScreen() {
    return (
        <SafeAreaView className="w-full h-full">
            <View className='flex-1 m-auto justify-center'>
                <FontAwesome name="search" size={50} color="yellow" />
                <Text className='text-white text-xl'>Finding Match</Text>
            </View>
        </SafeAreaView>
    )
}