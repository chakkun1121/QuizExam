"use client";
import { useEffect } from "react";
import { fileInfoType } from "../types/fileInfoType";
import { useRecoilState } from "recoil";
import { filesInfoState } from "./recoil/filesInfoState";

export function useAddFileToFilesInfo(newFileInfo: fileInfoType) {
  useEffect(() => {
    const [filesInfo, setFilesInfo] = useRecoilState(filesInfoState);
    // filesInfoの中にnewFileInfo.IDと同じIDを持つファイルがあれば、上書き、そうでなければ追加
    // filesInfoの中にnewFileInfo.IDと同じIDを持つファイルがあるか判定
    const isSameID = filesInfo.files.some((fileInfo: fileInfoType) => {
      return fileInfo.ID === newFileInfo.ID;
    });
    // filesInfoの中にnewFileInfo.IDと同じIDを持つファイルがある場合
    if (isSameID) {
      // filesInfoの中にnewFileInfo.IDと同じIDを持つファイルを上書き
      const newFilesInfo = filesInfo.files.map((fileInfo: fileInfoType) => {
        if (fileInfo.ID === newFileInfo.ID) {
          return newFileInfo;
        } else {
          return fileInfo;
        }
      });
      setFilesInfo({ files: newFilesInfo });
    }
    // filesInfoの中にnewFileInfo.IDと同じIDを持つファイルがない場合
    else {
      // filesInfoにnewFileInfoを追加
      setFilesInfo({ files: [...filesInfo.files, newFileInfo] });
    }
  }, []);
}
