"use client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { storage } from "./storage";
const { persistAtom } = recoilPersist({
  key: "settings",
  storage,
});
export const settingsState = atom({
  key: "settings",
  default: {
    files: [],
  },
  effects_UNSTABLE: [persistAtom],
});
