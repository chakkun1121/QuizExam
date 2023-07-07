"use client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist({
  key: "filesInfo",
  storage: window?.localStorage,
});
export const filesInfoState = atom({
  key: "filesInfo",
  default: {
    files: [],
  },
  effects_UNSTABLE: [persistAtom],
});
