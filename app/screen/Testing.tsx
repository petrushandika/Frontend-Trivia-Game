import { View, Text } from 'react-native'
import { Avatar } from "@rneui/themed";


export default function Testing() {
    return (
        <View>
            <View className='flex flex-row'>
                <Avatar
                    size="medium"
                    rounded
                    source={{
                        uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
                    }}
                />
                <Avatar
                    size="large"
                    rounded
                    source={{
                        uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
                    }}
                />
                <Avatar
                    size="medium"
                    rounded
                    source={{
                        uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
                    }}
                />
            </View>
        </View>
    )
}