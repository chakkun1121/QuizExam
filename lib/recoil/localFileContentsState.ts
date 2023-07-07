"use client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist({
  key: "localFileContents",
  storage: window?.localStorage,
});
export const localFileContentsState = atom({
  key: "localFileContents",
  default: {
    files: [],
  },
  effects_UNSTABLE: [persistAtom],
});
