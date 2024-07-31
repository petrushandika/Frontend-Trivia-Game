import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import RegisterScreen from '../screen/RegisterScreen';
import LoginScreen from '../screen/LoginScreen';
import MatchScreen from '../screen/MatchScreen';
import QuestionScreen from '../screen/QuestionScreen';
import WinnerScreen from '../screen/WinnerScreen';
import TestingScreen from '../screen/TestingScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Match" component={MatchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Question" component={QuestionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Winner" component={WinnerScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Testing" component={TestingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;