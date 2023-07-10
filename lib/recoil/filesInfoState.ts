"use client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { storage } from "./storage";
const { persistAtom } = recoilPersist({
  key: "filesInfo",
  storage: storage
});
export const filesInfoState = atom({
  key: "filesInfo",
  default: {
    files: [],
  },
  effects_UNSTABLE: [persistAtom],
});
