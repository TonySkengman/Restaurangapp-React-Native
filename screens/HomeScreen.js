import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import AboutUs from "../components/AboutUs";
import RestaurantAdress from "../components/RestaurantAdress";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Hero section fills the whole screen */}
          <View style={[styles.hero, { minHeight: height }]}>
            <Text style={styles.title}>THE STEAKHOUSE</Text>

            <Text style={styles.subtitle}>
              Premium cuts. Grilled to perfection.
            </Text>

            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Menu")}
            >
              <Text style={styles.buttonText}>MENU</Text>
            </Pressable>
          </View>

          {/* These are below the fold, so you scroll to see them */}
          <View style={styles.section}>
            <AboutUs />
          </View>

          <View style={styles.section}>
            <RestaurantAdress />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  hero: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  section: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },

  title: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },

  button: {
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});