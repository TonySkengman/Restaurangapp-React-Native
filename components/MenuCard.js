import { StyleSheet, Text, View, Pressable } from "react-native";

export default function MenuCard({ item, navigation }) {
  return (

  <Pressable
      onPress={() => navigation.navigate("MealDetails", { item })}
    >

    <View style={styles.mealCard}>

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

    </View>
  </Pressable>
  );
}

const styles = StyleSheet.create({
  mealCard: {
    backgroundColor: "#1c1c1c",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
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
});