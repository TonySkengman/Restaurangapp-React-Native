import {
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

import { useFavorites } from "../context/FavoritesContext";
import { useToast } from "../context/ToastContext";

export default function FavoriteButton({ item, style }) {
  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const { showToast } = useToast();

  const favorite = isFavorite(item.id);

  return (
    <Pressable
      style={[
        styles.favoriteButton,
        style,
      ]}
      onPress={() => {
        toggleFavorite(item);

        showToast(
          favorite
            ? "Removed from favorites"
            : "Added to favorites"
        );
      }}
    >
      <Text
        style={[
          styles.favoriteIcon,
          favorite && styles.favoriteActive,
        ]}
      >
        {favorite ? "★" : "☆"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  favoriteButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  favoriteIcon: {
    color: "white",
    fontSize: 30,
  },

  favoriteActive: {
    color: "white",
  },
});