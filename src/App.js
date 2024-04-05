import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyPage from "./pages/MyPage/MyPage";
import MenuBarLayout from "./Layouts/MenuBarLayout";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MenuBarLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Route>
        <Route element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
