"use client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist({
  key: "settings",
  storage: window?.localStorage,
});
export const settingsState = atom({
  key: "settings",
  default: {
    files: [],
  },
  effects_UNSTABLE: [persistAtom],
});
