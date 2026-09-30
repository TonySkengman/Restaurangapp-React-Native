import { FlatList, StyleSheet, Text, View } from "react-native";
import MenuCard from "./MenuItem";
import BackButton from "./BackButton";

export default function MenuCategoryScreen ({
  navigation,
  title,
  subtitle,
  data,
}) {
  return (
    <View style={styles.container}>

      <BackButton navigation={navigation} />

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
          <MenuCard item={item} navigation={navigation} />
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