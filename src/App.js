import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyPage from "./pages/MyPage/MyPage";
import FavoritesLocation from "./pages/FavoritesLocation/FavoritesLocation";
import FavoritesTraffic from "./pages/FavoritesTraffic/FavoritesTraffic";
import FavoritesRoute from "./pages/FavoritesRoute/FavoritesRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/trafficlights" element={<HomePage />}></Route>{" "}
        {/** 추후 element 수정*/}
        <Route path="/favorites" element={<HomePage />}></Route>{" "}
        {/** 추후 element 수정*/}
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/favoriteslocation" element={<FavoritesLocation />}></Route>
        <Route path="/favoritestraffic" element={<FavoritesTraffic />}></Route>
        <Route path="/favoritesroute" element={<FavoritesRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;