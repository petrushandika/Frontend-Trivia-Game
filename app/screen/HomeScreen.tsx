import { Image, View, Text } from "react-native";
export default function Home() {
    return (
        <View className="flex h-full bg-green-400">
            <Image
                source={{
                    uri: "../../assets/images/person.jpeg",
                }}
                className="w-20 h-20 rounded-full"
            />
            <Text className="text-black bg-yellow-400 text-xl">Hello World</Text>
        </View>
    );
}