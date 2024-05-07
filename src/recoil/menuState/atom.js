import { atom } from "recoil";

const menuState = atom({
  key: "menuState",
  default: "Home",
});

export default menuState;
