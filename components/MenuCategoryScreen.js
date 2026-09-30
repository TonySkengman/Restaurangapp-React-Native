import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import MenuCard from "./MenuCard";

export default function MenuCategoryScreen ({
  navigation,
  title,
  subtitle,
  data,
}) {
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
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

      <FlatList
        data={data}
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

  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
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