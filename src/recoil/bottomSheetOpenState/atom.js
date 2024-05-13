import { atom } from "recoil";

export const bottomSheetOpenState = atom({
  key: "bottomSheetOpenState",
  default: {
    detailInfoOpenState: "closed",
    surroundingLightInfoOpenState: "mid",
    favoritesInfoOpenState: "mid",
  },
});
