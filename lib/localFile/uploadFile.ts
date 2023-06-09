"use client";
import { getFileInfoFromFile } from "./getFileInfoFromFile";
import { fileInfoType, filesInfoState } from "../filesInfo";
import { addFileToFilesInfo } from "../addFileToFIlesInfo";

export async function uploadFile() {
  const FileSystemFileHandle: FileSystemFileHandle = await showFilePicker();
  if (!FileSystemFileHandle) return;
  const file = await FileSystemFileHandle?.getFile();
  const fileContent = await file.text();
  const fileName = FileSystemFileHandle.name;
  const fileInfo: fileInfoType = await getFileInfoFromFile(
    fileContent,
    fileName,
    "local"
  );
  addFileToFilesInfo(fileInfo);
}
async function showFilePicker() {
  const FileSystemFileHandle: FileSystemFileHandle = window.showDirectoryPicker
    ? await window.showOpenFilePicker({
        types: [
          {
            description: "QuizExam File",
            accept: {
              "application/xml": [".quizexam.xml"],
            },
          },
        ],
      })[0]
    : null;
  return FileSystemFileHandle;
}
