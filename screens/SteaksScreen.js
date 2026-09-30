import { StyleSheet, Text, View, Pressable } from "react-native";

export default function SteaksScreen( {navigation} ) {
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
        STEAKS
      </Text>

      <Text style={styles.subtitle}>
        Our selection of premium steaks
      </Text>
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
});