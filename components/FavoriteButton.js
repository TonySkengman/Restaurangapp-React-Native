import {
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

import { useFavorites } from "../context/FavoritesContext";
import { useToast } from "../context/ToastContext";

export default function FavoriteButton({ item, style, labelStyle, showLabel }) {
  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const { showToast } = useToast();

  const favorite = isFavorite(item.id);

  return (
    <Pressable
      style={[
        !showLabel && styles.favoriteButton,
        style,
      ]}

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
      <Text
        style={showLabel ? labelStyle : [
            styles.favoriteIcon,
            favorite && styles.favoriteActive,
          ]}
      >
        {showLabel
          ? favorite
            ? "REMOVE FROM FAVORITES"
            : "ADD TO FAVORITES"
          : favorite ? "★" : "☆"}
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
