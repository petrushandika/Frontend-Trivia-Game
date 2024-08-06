import { View, Text } from "react-native";
import { Button, Image } from "react-native-elements";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import API from "../../networks/api";

interface IQuestions {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  currentQuestionNumber: number;
  totalQuestions: number;
  onAnswerSelected?: (isCorrect: boolean) => void;
}

export default function QuestionScreen({
  navigation,
  question,
  answers,
  correctAnswerIndex,
  currentQuestionNumber,
  totalQuestions,
  onAnswerSelected
}: {
  navigation: any;
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  currentQuestionNumber: number;
  totalQuestions: number;
  onAnswerSelected?: (isCorrect: boolean) => void;
}) {
  const [press, setPress] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePress = (buttonName: string, index: number) => {
    setPress(buttonName);
    if (onAnswerSelected) {
      onAnswerSelected(index === correctAnswerIndex);
    }
  };

  const handleRelease = () => {
    setPress(null);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <View className="mt-10 p-5 h-full bg-blue-400">
      <View className="gap-y-10">
        <View className="flex flex-row justify-between p-5 rounded-full">
          <View className="flex flex-row items-center gap-x-3">
            <FontAwesome6 name="crown" size={20} color="yellow" />
            <Text className="text-white text-xl">2481</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-xl">
              {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}
            </Text>
          </View>
          <View className="bottom-0 right-0">
            <AntDesign
              name="closecircle"
              size={25}
              color="white"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        <View className="items-center gap-y-2">
          <Image
            source={require("../../assets/images/book.png")}
            style={{
              width: 150,
              height: 150,
            }}
          />
          <Text className="text-white text-xl">
            Question {currentQuestionNumber} of {totalQuestions}
          </Text>
          <Text className="text-white text-3xl font-medium">{question}</Text>
        </View>
        <View className="flex gap-y-5">
          {answers.map((answer, index) => (
            <Button
              key={index}
              title={answer}
              buttonStyle={{
                backgroundColor: press === answer ? (index === correctAnswerIndex ? "green" : "red") : "white",
                borderRadius: 100,
                borderColor: "black",
                paddingVertical: 15,
              }}
              titleStyle={{
                color: press === answer ? "white" : "black",
                fontSize: 20,
              }}
              onPressIn={() => handlePress(answer, index)}
              onPressOut={handleRelease}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
