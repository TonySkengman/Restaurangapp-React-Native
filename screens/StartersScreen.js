import { starters } from "../data/starters";
import MenuCategoryScreen from "../components/MenuCategoryScreen";

export default function StartersScreen( {navigation} ) {

  return (
    <MenuCategoryScreen
      navigation={navigation}
      title="STARTERS"
      subtitle="Begin your experience with something delicious"
      data={starters}
    />
  );
}