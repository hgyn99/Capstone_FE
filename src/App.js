import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyPage from "./pages/MyPage/MyPage";
import PathPage from "./pages/PathPage/PathPage";
import PathSearchPage from "./pages/PathPage/PathSearchPage/PathSearchPage";
import FavoritesLocationPage from "./pages/FavoritesLocationPage/FavoritesLocationPage";
import FavoritesTrafficPage from "./pages/FavoritesTrafficPage/FavoritesTrafficPage";
import FavoritesRoutePage from "./pages/FavoritesRoutePage/FavoritesRoutePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/trafficlights" element={<HomePage />}></Route>{" "}
        <Route path="/favorites" element={<HomePage />}></Route>{" "}
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route
          path="/mypage/favoritelocation"
          element={<FavoritesLocationPage />}
        ></Route>
        <Route
          path="/mypage/favoritestraffic"
          element={<FavoritesTrafficPage />}
        ></Route>
        <Route
          path="/mypage/favoritesroute"
          element={<FavoritesRoutePage />}
        ></Route>
        <Route path="/path" element={<PathPage />}></Route>
        <Route path="/pathsearch" element={<PathSearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
