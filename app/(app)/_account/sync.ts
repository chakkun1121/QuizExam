"use client";
// Todo: この関数が不調なため、治す(同期処理後に下の処理を行いたい)
import { useEffect } from "react";
import { isLogin } from "./isLogin";
import { syncFilesInfo } from "../../../lib/server/sync";
import { filesInfoType } from "../../../types/filesInfoType";

export async function sync(filesInfo: filesInfoType) {
  return new Promise<void>((resolve) => {
    useEffect(() => {
      async function sync() {
        if (isLogin()) {
          const message = await syncFilesInfo(filesInfo);
          console.log(message);
        }
        resolve();
      }
      sync();
    }, []);
  });
}
