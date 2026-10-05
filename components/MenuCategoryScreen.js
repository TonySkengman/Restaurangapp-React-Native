import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MenuCard from "./MenuItem";
import BackButton from "./BackButton";

export default function MenuCategoryScreen({
  navigation,
  title,
  subtitle,
  data,
  backgroundImage,
}) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >

      <SafeAreaView style={styles.overlay} edges={["top"]}>

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
            <MenuCard
              item={item}
              navigation={navigation}
            />
          )}
        />

      </SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    resizeMode: "cover",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    paddingHorizontal: 25,
    paddingTop: 25,
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
