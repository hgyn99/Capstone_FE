import { atom } from "recoil";

export const bottomSheetOpenState = atom({
  key: "bottomSheetOpenState",
  default: {
    detailInfoOpenState: { openState: "closed", id: 2 },
    surroundingLightInfoOpenState: "mid",
    favoritesInfoOpenState: "mid",
  },
});
