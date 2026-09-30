import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { starters } from "../data/starters";
import MenuCard from "../components/MenuCard";

export default function StartersScreen( {navigation} ) {

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
        STARTERS
      </Text>

      <Text style={styles.subtitle}>
        Begin your experience with something delicious
      </Text>

      <FlatList
        data={starters}
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
    paddingHorizontal: 25,
    paddingTop: 50,
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

})