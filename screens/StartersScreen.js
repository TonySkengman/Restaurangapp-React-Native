import { StyleSheet, Text, View, Pressable } from "react-native";

export default function StartersScreen({ navigation }) {
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
});