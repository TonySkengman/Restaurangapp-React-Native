import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function RestaurantAddress() {
  const openMaps = () => {
    const address = "Stora Gatan 12, 722 13 Västerås";

    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;

    Linking.openURL(url).catch((error) => {
      console.warn("Unable to open maps", error);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FIND US</Text>

      <Text style={styles.address}>
        The Steakhouse
      </Text>

      <Text style={styles.address}>
        Stora Gatan 12
      </Text>

      <Text style={styles.address}>
        722 13 Västerås
      </Text>

      <Pressable
        style={styles.button}
        accessibilityRole="button"
        accessibilityLabel="Get directions to The Steakhouse"
        onPress={openMaps}
      >
        <Text style={styles.buttonText}>
          GET DIRECTIONS
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: 12,
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },

  address: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },

  button: {
    marginTop: 18,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
  },

  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
