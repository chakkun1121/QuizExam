"use client";
export interface FilesInfoType {
  [key: string]: {
    fileID: string;
    fileName: string;
    createdData: string;
    lastEditedData: string;
    savedPlace: string;
  };
}
import React from "react";
/**
 * localStrage(filesInfo)の中身を取得するHook
 * @returns {FilesInfo} FilesInfoType
 */
export function useFilesInfo() {
  const [filesInfo, setFilesInfo] = React.useState(null);
  React.useEffect(() => {
    const filesInfo = localStorage.getItem("filesInfo");
    if (filesInfo) {
      setFilesInfo(JSON.parse(filesInfo));
    }
  }, []);
  return filesInfo;
}
