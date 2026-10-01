import { drinks } from "../data/drinks";
import MenuCategoryScreen from "../components/MenuCategoryScreen";

export default function DrinksScreen({ navigation }) {
  return (
    <MenuCategoryScreen
      navigation={navigation}
      title="DRINKS"
      subtitle="Something refreshing to accompany your meal"
      data={drinks}
      backgroundImage={require("../assets/images/drinks.png")}
    />
  );
}