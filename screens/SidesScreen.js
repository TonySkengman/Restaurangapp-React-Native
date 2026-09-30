import { sides } from "../data/sides";
import MenuCategoryScreen from "../components/MenuCategoryScreen";

export default function SidesScreen({ navigation }) {
  return (
    <MenuCategoryScreen
      navigation={navigation}
      title="SIDES"
      subtitle="The perfect sides for your steak"
      data={sides}
    />
  );
}