import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import StartersScreen from "./screens/StartersScreen";
import SteaksScreen from "./screens/SteaksScreen";
import SidesScreen from "./screens/SidesScreen";   
import DessertsScreen from "./screens/DessertsScreen";
import SaucesScreen from "./screens/SaucesScreen";
import DrinksScreen from "./screens/DrinksScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { FavoritesProvider } from "./context/FavoritesContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <FavoritesProvider>
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
          name="Favorites"
          component={FavoritesScreen}
        />

        <Stack.Screen
          name="StartersScreen"
          component={StartersScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SteaksScreen"
          component={SteaksScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SidesScreen"
          component={SidesScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SaucesScreen"
          component={SaucesScreen}
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

        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </FavoritesProvider>
  );
}