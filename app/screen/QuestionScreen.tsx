import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button, Image } from "react-native-elements";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import API from "../../networks/api";

interface IQuestions {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  onAnswerSelected?: (isCorrect: boolean) => void;
}

export default function QuestionScreen({ navigation }: { navigation: any }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionData, setQuestionData] = useState<IQuestions | null>(null);
  const [press, setPress] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const question = await API.QUESTION.GET_BY_ID(currentQuestionIndex + 1 );
        console.log('Fetched question:', question.data);
        setQuestionData(question);
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestion();

  }, [currentQuestionIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleTimeUp(); // Panggil fungsi ketika waktu habis
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePress = (buttonName: string, index: number) => {
    setPress(buttonName);
    if (questionData && questionData.onAnswerSelected) {
      questionData.onAnswerSelected(index === questionData.correctAnswerIndex);
    }
    
    setCurrentQuestionIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      // Inisialisasi untuk menghindari error saat pertanyaan berikutnya tidak ada
      if (nextIndex < 0) {
        return prevIndex; // Menghindari index negatif
      }

      setTimeLeft(30); // Reset timer untuk pertanyaan berikutnya
      setPress(null); // Reset status tombol tekan

      // Anda mungkin perlu menambahkan pengecekan untuk memastikan bahwa 
      // Anda tidak melebihi jumlah total pertanyaan jika ada lebih dari satu pertanyaan
      return nextIndex; 
    });
  };

  const handleRelease = () => {
    setPress(null);
  };

  const handleTimeUp = () => {
    setCurrentQuestionIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      // Inisialisasi untuk menghindari error saat pertanyaan berikutnya tidak ada
      if (nextIndex < 0) {
        return prevIndex; // Menghindari index negatif
      }

      setTimeLeft(30); // Reset timer untuk pertanyaan berikutnya
      setPress(null); // Reset status tombol tekan

      // Anda mungkin perlu menambahkan pengecekan untuk memastikan bahwa 
      // Anda tidak melebihi jumlah total pertanyaan jika ada lebih dari satu pertanyaan
      return nextIndex;
    });
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
            Question {currentQuestionIndex + 1}
          </Text>
          <Text className="text-white text-3xl font-medium">{questionData?.question}</Text>
        </View>
        <View className="flex gap-y-5">
          {questionData?.answers.map((answer, index) => (
            <Button
              key={index}
              title={answer}
              buttonStyle={{
                backgroundColor: press === answer ? (index === questionData.correctAnswerIndex ? "green" : "red") : "white",
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
