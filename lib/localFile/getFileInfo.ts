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
 * localStorage(filesInfo)の中身を取得するHook
 * @returns {FilesInfo} FilesInfoType
 */
export function useFilesInfo() {
  const [filesInfo, setFilesInfo] = React.useState(null);
  React.useEffect(() => {
    const filesInfo = JSON.parse(
      localStorage.getItem("filesInfo") || JSON.stringify([])
    );
    if (filesInfo) {
      setFilesInfo(filesInfo);
    }
  }, []);
  return filesInfo;
}
export default function useSetFilesInfo(filesInfo: FilesInfoType) {
  React.useEffect(() => {
    localStorage.setItem("filesInfo", JSON.stringify(filesInfo));
  }, [filesInfo]);
}
