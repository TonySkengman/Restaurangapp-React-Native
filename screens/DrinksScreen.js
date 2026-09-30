import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { drinks } from "../data/drinks";
import MenuCard from "../components/MenuCard";

export default function DrinksScreen({ navigation }) {

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
        DRINKS
      </Text>

      <Text style={styles.subtitle}>
        Something refreshing to accompany your meal
      </Text>

      <FlatList
        data={drinks}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <MenuCard item={item} />
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
  
});