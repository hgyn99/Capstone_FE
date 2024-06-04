import { atom } from "recoil";

export const arrivalAddressState = atom({
  key: "arrivalAddressState",
  default: {
    arrivalAddress: "",
  },
});
