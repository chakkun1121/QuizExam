"use client";
import { useEffect, useState } from "react";
import { FileInfoType } from "../home/file";
import { useFilesInfo } from "../../lib/localFile/getFileInfo";

export default function EditMain(fileInfo: { fileInfo: string }) {
  const fileID = fileInfo.fileInfo;
  console.log(fileID);
  if (fileID == "create") {
    //ファイルを新規作成
  }
  const fileSavedPlace = useFilePlace(fileID);
  console.log(fileSavedPlace);
  return <></>;
}
function useFilePlace(fileID: string) {
  const filesInfo = useFilesInfo();
  console.debug("filesInfo", filesInfo);
  const [fileSavedPlace, setFileSavedPlace] = useState<string | null>(null);
  useEffect(() => {
    console.debug("fileID", fileID);
    const fileSavedPlace = filesInfo?.find(
      (fileInfo: FileInfoType) => fileInfo.fileID === fileID
    )?.savedPlace;
    if (fileSavedPlace) {
      setFileSavedPlace(fileSavedPlace);
    }
  }, [fileID, filesInfo]);
  return fileSavedPlace;
}
