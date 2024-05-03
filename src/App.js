import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/trafficlights" element={<HomePage />}></Route> {/** 추후 element 수정*/}
        <Route path="/favorites" element={<HomePage />}></Route> {/** 추후 element 수정*/}
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;