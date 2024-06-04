import { atom } from "recoil";

export const departureAddressState = atom({
  key: "departureAddressState",
  default: {
    departureAddress: "",
    arrivalAddress: "",
  },
});
