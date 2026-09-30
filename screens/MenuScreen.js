import {
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← BACK</Text>
      </Pressable>

      <Text style={styles.title}>
        MENU
      </Text>

      <Text style={styles.subtitle}>
        Choose a category
      </Text>

      <View style={styles.categoryContainer}>

        <Pressable
          style={styles.categoryButton}
          onPress={() => navigation.navigate("StartersScreen")}
        >
          <Text style={styles.categoryText}>
            STARTERS
          </Text>
        </Pressable>

        <Pressable
          style={styles.categoryButton}
          onPress={() => navigation.navigate("MainsScreen")}
        >
          <Text style={styles.categoryText}>
            MAINS
          </Text>
        </Pressable>

        <Pressable
          style={styles.categoryButton}
          onPress={() => navigation.navigate("SteaksScreen")}
        >
          <Text style={styles.categoryText}>
            STEAKS
          </Text>
        </Pressable>

        <Pressable
          style={styles.categoryButton}
          onPress={() => navigation.navigate("DrinksScreen")}
        >
          <Text style={styles.categoryText}>
            DRINKS
          </Text>
        </Pressable>

        <Pressable
          style={styles.categoryButton}
          onPress={() => navigation.navigate("DessertsScreen")}
        >
          <Text style={styles.categoryText}>
            DESSERTS
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
    paddingTop: 60,
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
    textAlign: "center",
  },

  subtitle: {
    color: "#b5b5b5",
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 40,
  },

  categoryContainer: {
    gap: 18,
  },

  categoryButton: {
    height: 100,
    backgroundColor: "#1c1c1c",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});