import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "../components/BackButton";
import FavoriteButton from "../components/FavoriteButton";

export default function MealDetailsScreen({ navigation, route }) {
  const { item } = route.params;

  return (
    <ImageBackground
      source={require("../assets/images/backgrounds/menu.png")}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >

      <SafeAreaView
        style={styles.overlay}
        edges={["top"]}
      >

        <BackButton navigation={navigation} />

        <View style={styles.card}>

          <Image
            source={item.image}
            style={styles.mealImage}
            accessibilityRole="image"
            accessibilityLabel={`${item.name} meal`}
          />

          <Text style={styles.title}>
            {item.name}
          </Text>

          <Text style={styles.description}>
            {item.description}
          </Text>

          <Text style={styles.price}>
            {item.price} SEK
          </Text>

          <FavoriteButton
            item={item}
            style={styles.favoriteButton}
            labelStyle={styles.favoriteButtonText}
            showLabel
          />

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

  card: {
    backgroundColor: "rgba(28, 28, 28, 0.75)",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 10,
    padding: 25,
  },

  mealImage: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  description: {
    color: "#b5b5b5",
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 25,
  },

  price: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
  },

  favoriteButton: {
    backgroundColor: "#333333",
    borderWidth: 1,
    borderColor: "#666666",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
  },

  favoriteButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});