"use client";

import { fileInfoType } from "../../types/fileInfoType";
import { filesInfoType } from "../../types/filesInfoType";
import { localFileContentsType } from "../../types/localFileContentsType";
import { getFileInfoFromFile } from "./getFileInfoFromFile";
import { removeExtension } from "./removeExtension";
import { showFilePicker } from "./showFilePicker";

export async function openLocalFile(setFilesInfo, setLocalFileContents) {
  const FileSystemFileHandle = await showFilePicker();
  const file = await FileSystemFileHandle.getFile();
  if (!checkExtension) throw new Error("拡張子が不正です");
  const fileContents = await file.text();
  const thisFileInfo = await getFileInfoFromFile(
    fileContents,
    removeExtension(FileSystemFileHandle.name),
    "local"
  );
  setFilesInfo((filesInfo: filesInfoType) => {
    const cashFilesInfoArray = [...filesInfo.files];
    const thisIndex: number =
      filesInfo?.files?.findIndex((fileInfo: fileInfoType) => {
        return fileInfo.ID === thisFileInfo.ID;
      }) || -1;
    if (thisIndex === -1) {
      cashFilesInfoArray.push(thisFileInfo);
    } else {
      cashFilesInfoArray[thisIndex] = thisFileInfo;
    }
    return { files: cashFilesInfoArray };
  });
  setLocalFileContents((localFileContents: localFileContentsType) => {
    const cashLocalFileContentsArray = { ...localFileContents.files };
    cashLocalFileContentsArray[thisFileInfo.ID] = fileContents;
    return { files: cashLocalFileContentsArray };
  });
}

function checkExtension(fileName: string): boolean {
  const extension = fileName.split(".").pop();
  if (extension === "quizexam.xml" /*|| extension === "wayaku"*/) {
    return true;
  }
  return false;
}
