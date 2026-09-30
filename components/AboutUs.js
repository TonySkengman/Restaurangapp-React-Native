import { StyleSheet, Text, View } from "react-native";

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ABOUT US</Text>

      <Text style={styles.text}>
        At The Steakhouse, it all comes down to one thing – great food.
      </Text>

      <Text style={styles.text}>
        We are passionate about quality cuts of meat, carefully selected
        ingredients, and the classic atmosphere of a great steakhouse.
      </Text>

      <Text style={styles.text}>
        Every dish is prepared with care and served with a focus on
        flavor, quality, and a memorable dining experience.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 30,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  text: {
    color: "white",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
    marginBottom: 15,
  },
});