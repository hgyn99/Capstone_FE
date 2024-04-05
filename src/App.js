import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyPage from "./pages/MyPage/MyPage";
import LayOut from "./Layouts/LayOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
