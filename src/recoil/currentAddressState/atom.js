import { atom } from "recoil";

export const currentAddressState = atom({
  key: "currentAddressState",
  default: {
    currentLat: null,
    currentLng: null,
    currentAddress: "",
  },
});
