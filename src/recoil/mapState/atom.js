import { atom } from "recoil";

const mapState = atom({
  key: "mapState",
  default: null, // 또는 초기화되지 않은 객체
});

export default mapState;
