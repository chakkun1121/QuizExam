"use client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { filesInfoType } from "../@types/filesInfoType";
const { persistAtom } = recoilPersist({
  key: "filesInfo",
  storage: typeof window === "undefined" ? undefined : localStorage,
});
export const filesInfoState = atom<filesInfoType>({
  key: "filesInfo",
  default: {
    files: [],
  },
  effects_UNSTABLE: [persistAtom],
});
