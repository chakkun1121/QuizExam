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
import { getRoot } from "../originPrivateFileSystem/getRoot";
/**
 * localStorage(filesInfo)の中身を取得するHook
 * @returns {FilesInfo} FilesInfoType
 */
export async function getFilesInfo() {
  const opfsRoot = await getRoot();
  const FileHandle: FileSystemFileHandle = await opfsRoot.getFileHandle(
    "filesInfo.json",
    {
      create: true,
    }
  );
  const filesInfo: FilesInfoType = await FileHandle?.getFile();
  console.log(filesInfo);
  return filesInfo;
}
export async function setFilesInfo(filesInfo: FilesInfoType) {
  const opfsRoot = await getRoot();
  const FIleHandle = await opfsRoot.getFileHandle("filesInfo.json", {
    create: true,
  });
  const fileInfoJson = await FIleHandle.createWritable();
  await fileInfoJson.write(JSON.stringify({ filesInfo: { filesInfo } }));
  await fileInfoJson.close();
}
