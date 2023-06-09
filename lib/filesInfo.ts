"use client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist({
  key: "filesInfo",
  storage: typeof window === "undefined" ? undefined : window.localStorage,
});
export const filesInfoState = atom({
  key: "filesInfo",
  default: {
    files: [],
  },
  effects_UNSTABLE: [persistAtom],
});
export interface fileInfoType {
  ID: string;
  name: string;
  createdData: Date;
  lastEditedData: Date;
  content: string;
  savedPlace: string;
}
export interface filesInfoType {
  files: [
    {
      ID: string;
      name: string;
      createdData: Date;
      lastEditedData: Date;
      content: string;
      savedPlace: string;
    }
  ];
}
