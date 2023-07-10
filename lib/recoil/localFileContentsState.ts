"use client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { storage } from "./storage";
const { persistAtom } = recoilPersist({
  key: "localFileContents",
  storage
});
export const localFileContentsState = atom({
  key: "localFileContents",
  default: {
    files: [],
  },
  effects_UNSTABLE: [persistAtom],
});
