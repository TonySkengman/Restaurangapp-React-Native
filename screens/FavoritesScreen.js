import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "../components/BackButton";
import MenuItem from "../components/MenuItem";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

  return (
    <ImageBackground
      source={require("../assets/images/backgrounds/menu.png")}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.overlay} edges={["top"]}>

        <BackButton navigation={navigation} />

        <Text style={styles.title}>
          FAVORITES
        </Text>

        <Text style={styles.subtitle}>
          Your favorite meals
        </Text>

        {favorites.length === 0 ? (
          <Text style={styles.emptyText}>
            You haven't added any favorites yet.
          </Text>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <MenuItem
                item={item}
                navigation={navigation}
              />
            )}
          />
        )}

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

  emptyText: {
    color: "#b5b5b5",
    fontSize: 16,
    marginTop: 30,
  },
});
