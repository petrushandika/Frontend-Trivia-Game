import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import MatchScreen from "./screen/MatchScreen";
import QuestionScreen from "./screen/QuestionScreen";
import WinnerScreen from "./screen/WinnerScreen";
import AvatarScreen from "./screen/AvatarScreen";
import LooserScreen from "./screen/LooserScreen";
import AvatarModal from "@/components/modal/AvatarModal";
import DiamondModal from "@/components/modal/DiamondModal";
import DiamondScreen from "./screen/DiamondScreen";
import MatchMaking from "@/components/MatchMaking";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import LeaderboardScreen from "./screen/LeaderboardScreen";
// import TestingScreen from "./screen/TestingScreen"

const queryClient = new QueryClient();

const Stack = createStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="login">
          {/* <Stack.Screen
            name="Testing"
            component={TestingScreen}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Avatar"
            component={AvatarScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Match"
            component={MatchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Question"
            component={QuestionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Winner"
            component={WinnerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Looser"
            component={LooserScreen}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="AvatarModal" component={AvatarModal} options={{ headerShown: false }} />
          <Stack.Screen
            name="DiamondModal"
            component={DiamondModal}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="DiamondShop"
            component={DiamondScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ranking"
            component={LeaderboardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MatchMaking" component={MatchMaking} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
