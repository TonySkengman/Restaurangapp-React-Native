import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { sauces } from "../data/sauces";

export default function SaucesScreen( {navigation} ) {

  return (
    <View style={styles.container}>

              <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>
          ← BACK
        </Text>
      </Pressable>

      <Text style={styles.title}>
        SAUCES
      </Text>

      <Text style={styles.subtitle}>
        Choose the perfect finishing touch
      </Text>

      <FlatList
        data={sauces}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
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
        )}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    paddingTop: 50,
    paddingHorizontal: 25,
  },

  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },

    backButton: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingRight: 20,
    marginBottom: 10,
  },

  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  subtitle: {
    color: "#b5b5b5",
    fontSize: 18,
    marginTop: 10,
  },

      list: {
    paddingTop: 25,
    paddingBottom: 30,
  },

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