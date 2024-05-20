import NavigationBarLayout from "../../components/NavigationBarLayout";
import SearchingBar from "./SearchingBar";
import FavoriteList from "./FavoriteList";
import RecentPath from "./RecentPath";

const Path = () => {
  return (
    <NavigationBarLayout>
      <SearchingBar />
      <FavoriteList />
      <RecentPath />
    </NavigationBarLayout>
  );
};

export default Path;
