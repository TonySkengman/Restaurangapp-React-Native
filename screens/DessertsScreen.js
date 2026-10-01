import { desserts } from "../data/desserts";
import MenuCategoryScreen from "../components/MenuCategoryScreen";

export default function DessertsScreen({ navigation }) {
  return (
    <MenuCategoryScreen
      navigation={navigation}
      title="DESSERTS"
      subtitle="Something sweet to finish"
      data={desserts}
      backgroundImage={require("../assets/images/desserts.png")}
    />
  );
}