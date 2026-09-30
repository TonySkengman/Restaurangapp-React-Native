import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import BackButton from "../components/BackButton";

export default function MealDetailsScreen({ navigation, route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>

    <BackButton navigation={navigation} />

      <View style={styles.card}>

        <Text style={styles.title}>
          {item.name}
        </Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.price}>
          {item.price} SEK
        </Text>

        <Pressable style={styles.orderButton}>
          <Text style={styles.orderButtonText}>
            ADD TO ORDER
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
    backgroundColor: "#1c1c1c",
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

  orderButton: {
    backgroundColor: "#333333",
    borderWidth: 1,
    borderColor: "#666666",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
  },

  orderButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});