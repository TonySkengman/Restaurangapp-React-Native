import { sauces } from "../data/sauces";
import MenuCategoryScreen from "../components/MenuCategoryScreen";

export default function SaucesScreen({ navigation }) {
  return (
    <MenuCategoryScreen
      navigation={navigation}
      title="SAUCES"
      subtitle="Choose the perfect finishing touch"
      data={sauces}
      backgroundImage={require("../assets/images/sauces.png")}
    />
  );
}