"use client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType } from "../../lib/filesInfo";
export default function EditMain(fileInfo: { fileInfo: string }) {
  const fileID = fileInfo.fileInfo;
  console.log(fileID);
  const [filesInfo, setFilesInfo] = useRecoilState(filesInfoState);
  if (fileID) {
    //ファイル情報を取得
    const [fileInfo, setFileInfo] = useState<fileInfoType>(
      filesInfo.find((fileInfo: fileInfoType) => fileInfo.ID === fileID)
    );
  }
  return <></>;
}
