import { View, SafeAreaView, Text } from "react-native";
import { Avatar, ListItem, Button } from "react-native-elements";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import { Tab, TabView } from "@rneui/themed";
import { useState } from "react";
export default function LeaderboardScreen({navigation} : {navigation : any}) {
    const [index, setIndex] = useState<number>(0);
  return (
    <SafeAreaView className="w-full h-full bg-slate-200 p-4">
      <View className="flex flex-row items-center justify-between mt-3">
        <View className="bg-white h-10 w-10 rounded-full justify-center items-center">
          <FontAwesome6 name="angle-left" size={25} color="black" />
        </View>
        <Text className="text-black text-2xl font-medium">Match Result</Text>
        <View className="bg-white h-10 w-10 rounded-full items-center justify-center">
          <Entypo name="dots-three-horizontal" size={30} color="black" />
        </View>
      </View>
      {/* <Tab value={index} onChange={setIndex} dense>
        <Tab.Item>Winner</Tab.Item>
        <Tab.Item>Loser</Tab.Item>
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <Text>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text>Favorite</Text>
        </TabView.Item>
      </TabView> */}
      <View className="flex flex-row space-x-3 items-center p-4 bg-orange-300 mt-5 rounded-[8px] opacity-70">
        <View className="justify-center items-center">
          <FontAwesome6 name="star" size={30} color="yellow" />
        </View>
        <View className="ml-3">
          <Text className="text-white text-2xl">
            {" "}
            You are doing better than 60% of other players!
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-between items-center mt-8">
        <View className="flex items-center justify-center space-y-1 mt-[82px]">
          <View className="p-2 rounded-full border-[2px] border-blue-400">
            <Avatar
              size={"large"}
              rounded
              source={require("@/assets/images/person1.jpg")}
            />
          </View>
          <Text className="text-white bg-blue-400 rounded-full h-[20px] w-[20px] absolute text-center">
            2
          </Text>
          <Text className="text-black text-lg font-medium">Steve Jobs</Text>
          <Text className="text-slate-500 bg-white p-1 rounded-[10px]">
            1840 coins
          </Text>
        </View>
        <View className="flex items-center justify-center space-y-1 mb-6">
          <FontAwesome6 name="crown" size={25} color="orange" />
          <View className="p-2 rounded-full border-[2px] border-amber-400">
            <Avatar
              size={"large"}
              rounded
              source={require("@/assets/images/person2.jpg")}
            />
          </View>
          <Text className="text-white bg-amber-400 rounded-full h-[20px] w-[20px] absolute text-center">
            1
          </Text>
          <Text className="text-black text-lg font-medium">
            Albert Einstein
          </Text>
          <Text className="text-slate-500 bg-white p-1 rounded-[10px]">
            1900 coins
          </Text>
        </View>
        <View className="flex items-center justify-center space-y-1 mt-20">
          <View className="p-2 rounded-full border-[2px] border-orange-800">
            <Avatar
              size={"large"}
              rounded
              source={require("@/assets/images/person3.jpg")}
            />
          </View>
          <Text className="text-white bg-orange-800 rounded-full h-[20px] w-[20px] absolute text-center">
            3
          </Text>
          <Text className="text-black text-lg font-medium">Taylor Swift</Text>
          <Text className="text-slate-500 bg-white p-1 rounded-[8px]">
            1620 coins
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-between p-4 bg-slate-300 rounded-[20px] mt-4">
        <View className="flex flex-row items-center space-x-2">
          <Avatar
            size={"medium"}
            rounded
            source={require("@/assets/images/person4.jpg")}
          />
          <View className="flex">
            <Text className="text-black text-lg font-medium">Hatori Hanzo</Text>
            <Text className="text-slate-500">1500 coins</Text>
          </View>
        </View>
        <View className="bg-white h-10 w-10 rounded-full items-center justify-center">
          <Text>4</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between p-4 bg-slate-300 rounded-[20px] mt-3">
        <View className="flex flex-row items-center space-x-2">
          <Avatar
            size={"medium"}
            rounded
            source={require("@/assets/images/person6.jpg")}
          />
          <View className="flex">
            <Text className="text-black text-lg font-medium">
              Robert Downey
            </Text>
            <Text className="text-slate-500">1500 coins</Text>
          </View>
        </View>
        <View className="bg-white h-10 w-10 rounded-full items-center justify-center">
          <Text>5</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-evenly mt-auto w-full space-x-3">
        <Button
          title="Return to Home"
          onPress={() => navigation.navigate("Home")}
          buttonStyle={{ backgroundColor: "red", borderRadius: 20 }}
          containerStyle={{ width: "40%" }}
        />
        <Button
          title="Play Again"
          buttonStyle={{ backgroundColor: "green", borderRadius: 20 }}
          containerStyle={{ width: "40%" }}
        />
      </View>
    </SafeAreaView>
  );
}
