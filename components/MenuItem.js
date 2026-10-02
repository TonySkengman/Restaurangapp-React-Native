import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import FavoriteButton from "./FavoriteButton";

export default function MenuItem({ item, navigation }) {

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

      <FavoriteButton
       item={item}
       style={styles.favoriteButton}
       />

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
  },
});