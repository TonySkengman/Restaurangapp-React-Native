import {
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

import { useFavorites } from "../context/FavoritesContext";

export default function FavoriteButton({ item, style }) {
  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const favorite = isFavorite(item.id);

  return (
    <Pressable
      style={[
        styles.favoriteButton,
        style,
      ]}
      onPress={() => toggleFavorite(item)}
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