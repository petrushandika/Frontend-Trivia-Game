import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button, Image } from "react-native-elements";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import socket from "../../services/socketService";
import { useRoute } from "@react-navigation/native";

interface Answer {
    content: string;
    isCorrect: boolean;
}

interface IQuestions {
    content: string;
    answer: Answer[];
}

export default function QuestionScreen({ navigation }: { navigation: any }) {
    const route = useRoute()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionData, setQuestionData] = useState<IQuestions | null>(null);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [timeLeft, setTimeLeft] = useState(30);
    const [points, setPoints] = useState(0);
    console.log(route);


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    handleTimeUp();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);


        socket.emit('requestQuestion', { ...route.params, currentIndex: currentQuestionIndex });

        socket.on('questionData', (data: IQuestions) => {
            console.log(data);

            setQuestionData(data);
            setSelectedAnswerIndex(null);
            setIsAnswerCorrect(null);
            setTimeLeft(30);
        });

        socket.on('error', (error: Error) => {
            console.error("Socket error:", error);
            navigation.navigate('Home');
        });

        socket.on('questionTimeout', () => {
            handleTimeUp();
        });

        return () => {
            socket.off('questionData');
            socket.off('error');
            socket.off('questionTimeout');
            clearInterval(timer);
        };
    }, []);



    const handlePress = (index: number) => {
        if (selectedAnswerIndex !== null) return;

        setSelectedAnswerIndex(index);
        const selectedAnswer = questionData?.answer[index];
        const isCorrect = selectedAnswer?.isCorrect ?? false;

        console.log('Selected Answer Index:', index);
        console.log('Selected Answer IsCorrect:', isCorrect);

        setIsAnswerCorrect(isCorrect);
        if (isCorrect) {
            const earnedPoints = Math.floor(timeLeft * 3.3);
            setPoints(prevPoints => {
                const newPoints = prevPoints + earnedPoints;
                console.log('Updated points:', newPoints);
                return newPoints;
            });
        }

        socket.emit('submitAnswer', {
            questionIndex: currentQuestionIndex + 1,
            answerIndex: index,
            isCorrect,
        });

        socket.emit('requestQuestion', { ...route.params, currentIndex: currentQuestionIndex });


        setTimeout(() => {
            if (currentQuestionIndex >= 9) {
                navigation.navigate('Ranking', { points });
            } else {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
                socket.emit('requestQuestion', currentQuestionIndex + 2);
            }
        }, 1000);
    };

    const handleTimeUp = () => {
        socket.emit('timeout');
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setTimeLeft(30);
        setSelectedAnswerIndex(null);
        setIsAnswerCorrect(null);
    };

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <View className="mt-10 p-5 h-full bg-blue-400">
            <View className="gap-y-10">
                <View className="flex flex-row justify-between p-5 rounded-full">
                    <View className="flex flex-row items-center gap-x-3">
                        <FontAwesome6 name="crown" size={20} color="yellow" />
                        <Text className="text-white text-xl">{points}</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-white text-xl">
                            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
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
                        Question {currentQuestionIndex + 1}
                    </Text>
                    <Text className="text-white text-3xl font-medium">{questionData?.content}</Text>
                </View>
                <View className="flex gap-y-5">
                    {questionData?.answer?.map((answer, index) => (
                        <Button
                            key={index}
                            title={answer.content}
                            buttonStyle={{
                                backgroundColor: selectedAnswerIndex !== null
                                    ? answer.isCorrect
                                        ? "green"
                                        : index === selectedAnswerIndex
                                            ? "red"
                                            : "white"
                                    : "white",
                                borderRadius: 100,
                                borderColor: "black",
                                paddingVertical: 15,
                                marginBottom: 10
                            }}
                            titleStyle={{
                                color: selectedAnswerIndex !== null
                                    ? answer.isCorrect
                                        ? "white"
                                        : index === selectedAnswerIndex
                                            ? "white"
                                            : "black"
                                    : "black",
                                fontSize: 20,
                            }}
                            onPressIn={() => handlePress(index)}
                            disabled={selectedAnswerIndex !== null}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
}