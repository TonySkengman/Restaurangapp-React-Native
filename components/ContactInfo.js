import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ContactInfo() {
  const openEmail = () => {
    Linking.openURL("mailto:info@steakhouse.se");
  };

  const openPhone = () => {
    Linking.openURL("tel:+46211234567");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        CONTACT US
      </Text>

      <Text style={styles.subtitle}>
        Have a question? Get in touch with us.
      </Text>

      <Pressable
        style={styles.contactButton}
        onPress={openEmail}
      >
        <Text style={styles.icon}>
          ✉
        </Text>

        <View>
          <Text style={styles.label}>
            EMAIL
          </Text>

          <Text style={styles.contactText}>
            info@steakhouse.se
          </Text>
        </View>
      </Pressable>

      <Pressable
        style={styles.contactButton}
        onPress={openPhone}
      >
        <Text style={styles.icon}>
          ☎
        </Text>

        <View>
          <Text style={styles.label}>
            PHONE
          </Text>

          <Text style={styles.contactText}>
            +46 21 123 45 67
          </Text>
        </View>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    color: "#b5b5b5",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
  },

  contactButton: {
    width: "100%",
    backgroundColor: "rgba(28, 28, 28, 0.75)",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  icon: {
    color: "white",
    fontSize: 30,
    marginRight: 15,
    width: 35,
    textAlign: "center",
  },

  label: {
    color: "#b5b5b5",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 3,
  },

  contactText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});