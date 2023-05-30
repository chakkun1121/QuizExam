"use client";
import { FileInfoType } from "../home/file";
import { useFilesInfo } from "../home/getFile";

export default function EditMain(fileID: string) {
  const filesInfo = useFilesInfo();
  console.log(filesInfo);
  const fileSavedPlace = filesInfo?.find(
    (fileInfo: FileInfoType) => fileInfo.fileID === fileID
  )?.savedPlace;
  console.log(fileSavedPlace);
  return <></>;
}
