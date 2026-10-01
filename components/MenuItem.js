import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useState } from "react";

export default function MenuItem({ item, navigation }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.wrapper}>

      <Pressable
        style={styles.mealCard}
        onPress={() => navigation.navigate("MealDetails", { item })}
      >

        <View style={styles.mealInfo}>
          <Text style={styles.mealName}>
            {item.name}
          </Text>

          <Text style={styles.description}>
            {item.description}
          </Text>
        </View>

        <Text style={styles.price}>
          {item.price} SEK
        </Text>

      </Pressable>

      <Pressable
        style={styles.favoriteButton}
        onPress={() => setIsFavorite(!isFavorite)}
      >
        <Text
          style={[
            styles.favoriteIcon,
            isFavorite && styles.favoriteActive,
          ]}
        >
          {isFavorite ? "★" : "☆"}
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    marginBottom: 15,
  },

  mealCard: {
    backgroundColor: "rgba(28, 28, 28, 0.75)",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 10,
    padding: 20,
    paddingRight: 60,
  },

  mealInfo: {
    marginBottom: 12,
  },

  mealName: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    color: "#b5b5b5",
    fontSize: 15,
    lineHeight: 21,
  },

  price: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },

  favoriteButton: {
    position: "absolute",
    right: 15,
    top: 15,
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