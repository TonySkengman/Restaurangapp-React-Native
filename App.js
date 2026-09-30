import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import StartersScreen from "./screens/StartersScreen";
import SteaksScreen from "./screens/SteaksScreen";
import MainsScreen from "./screens/MainsScreen";
import DessertsScreen from "./screens/DessertsScreen";
import DrinksScreen from "./screens/DrinksScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Menu"
          component={MenuScreen}
        />

        <Stack.Screen
          name="StartersScreen"
          component={StartersScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MainsScreen"
          component={MainsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SteaksScreen"
          component={SteaksScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DrinksScreen"
          component={DrinksScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DessertsScreen"
          component={DessertsScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}