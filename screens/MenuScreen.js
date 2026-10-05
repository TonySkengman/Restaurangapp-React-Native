import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "../components/BackButton";

export default function MenuScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/backgrounds/menu.png")}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >

      <SafeAreaView style={styles.overlay} edges={["top"]}>

        <BackButton navigation={navigation} />

        <Text style={styles.title}>
          MENU
        </Text>

        <Text style={styles.subtitle}>
          Choose a category
        </Text>

        <View style={styles.categoryContainer}>

          <Pressable
            style={styles.categoryButton}
            accessibilityRole="button"
            accessibilityLabel="View starters menu"
            onPress={() => navigation.navigate("StartersScreen")}
          >
            <Text style={styles.categoryText}>
              STARTERS
            </Text>
          </Pressable>

          <Pressable
            style={styles.categoryButton}
            accessibilityRole="button"
            accessibilityLabel="View steaks menu"
            onPress={() => navigation.navigate("SteaksScreen")}
          >
            <Text style={styles.categoryText}>
              STEAKS
            </Text>
          </Pressable>

          <Pressable
            style={styles.categoryButton}
            accessibilityRole="button"
            accessibilityLabel="View sides menu"
            onPress={() => navigation.navigate("SidesScreen")}
          >
            <Text style={styles.categoryText}>
              SIDES
            </Text>
          </Pressable>

          <Pressable
            style={styles.categoryButton}
            accessibilityRole="button"
            accessibilityLabel="View sauces menu"
            onPress={() => navigation.navigate("SaucesScreen")}
          >
            <Text style={styles.categoryText}>
              SAUCES
            </Text>
          </Pressable>

          <Pressable
            style={styles.categoryButton}
            accessibilityRole="button"
            accessibilityLabel="View drinks menu"
            onPress={() => navigation.navigate("DrinksScreen")}
          >
            <Text style={styles.categoryText}>
              DRINKS
            </Text>
          </Pressable>

          <Pressable
            style={styles.categoryButton}
            accessibilityRole="button"
            accessibilityLabel="View desserts menu"
            onPress={() => navigation.navigate("DessertsScreen")}
          >
            <Text style={styles.categoryText}>
              DESSERTS
            </Text>
          </Pressable>

        </View>

      </SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    resizeMode: "cover",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    paddingHorizontal: 25,
    paddingTop: 35,
  },

  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#b5b5b5",
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 30,
  },

  categoryContainer: {
    gap: 15,
  },

  categoryButton: {
    height: 95,
    backgroundColor: "rgba(28, 28, 28, 0.75)",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
