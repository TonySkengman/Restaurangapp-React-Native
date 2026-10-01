import { steaks } from "../data/steaks";
import MenuCategoryScreen from "../components/MenuCategoryScreen";

export default function SteaksScreen({ navigation }) {
  return (
    <MenuCategoryScreen
      navigation={navigation}
      title="STEAKS"
      subtitle="Our selection of premium steaks"
      data={steaks}
      backgroundImage={require("../assets/images/steaks.png")}
    />
  );
}