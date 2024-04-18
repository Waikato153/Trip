
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import AddTrips from '../screens/AddTripsScreen';
import TripExpenseScreen from '../screens/TripExpenseScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SignInScreen';
import SignupScreen from '../screens/SignUpScreen';
import { useSelector } from 'react-redux';

 

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const user = useSelector(state => state.user)

  console.log(user);

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name="AddTrip" options={{headerShown: false}} component={AddTrips} />
          <Stack.Screen name="AddExpense" options={{headerShown: false}} component={AddExpenseScreen} />
          <Stack.Screen name="expenseTrip" options={{headerShown: false}} component={TripExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
          <Stack.Screen name="signin" options={{headerShown: false, presentation: "modal"}} component={SigninScreen} />
          <Stack.Screen name="signup" options={{headerShown: false, presentation: "modal"}} component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}