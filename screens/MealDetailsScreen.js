import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import BackButton from "../components/BackButton";
import { useFavorites } from "../context/FavoritesContext";
import { useToast } from "../context/ToastContext";

export default function MealDetailsScreen({ navigation, route }) {
  const { item } = route.params;

  const { showToast } = useToast();

  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const favorite = isFavorite(item.id);

  return (
    <View style={styles.container}>

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

        <Pressable
          style={styles.favoriteButton}
          accessibilityRole="button"
          accessibilityLabel={
            favorite
              ? `Remove ${item.name} from favorites`
              : `Add ${item.name} to favorites`
          }
          accessibilityState={{
            selected: favorite,
          }}
          onPress={() => {
            toggleFavorite(item);

            showToast(
              favorite
                ? "Removed from favorites"
                : "Added to favorites"
              );
            }}
          >
          <Text style={styles.favoriteButtonText}>
            {favorite
              ? "REMOVE FROM FAVORITES"
              : "ADD TO FAVORITES"}
          </Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    paddingHorizontal: 25,
    paddingTop: 50,
  },

  card: {
    backgroundColor: "rgba(28, 28, 28, 0.75)",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 10,
    padding: 25,
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

  mealImage: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },
});