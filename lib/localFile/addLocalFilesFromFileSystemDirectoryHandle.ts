"use client";
import { getAllFiles } from "./getAllFiles";
import { getFileInfoFromFile } from "./getFileInfoFromFile";

export async function addLocalFilesFromFileSystemDirectoryHandle(
  FileSystemDirectoryHandle: FileSystemDirectoryHandle
) {
  const allFiles = await getAllFiles(FileSystemDirectoryHandle);
    
  const savedFilesInfo = localStorage.getItem("filesInfo");
  const localFilesInfo = [];
  (async () => {
    for (const file of allFiles) {
      const fileInfo = await getFileInfoFromFile(file);
      console.debug(fileInfo);
      localFilesInfo.push(fileInfo);
    }
  })();
  console.debug(localFilesInfo);
  //既存のファイル情報との差分のみを適応する
}
