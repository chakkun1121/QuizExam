"use client";

import { filesInfoType } from "./filesInfo";
import { getFileInfoFromFile } from "./localFile/getFileInfoFromFile";
import { getFileName } from "./localStorage/getFIleName";
import { getFileFromFileID } from "./localStorage/localStorage";

export async function downloadFile(fileID: string, filesInfo: filesInfoType) {
  const file: Element = getFileFromFileID(filesInfo, fileID);
  const fileName: string = getFileName(filesInfo, fileID);
  const fileContent: string = file.outerHTML;
  const fileHandle = await window.showSaveFilePicker({
    suggestedName: `${fileName}.quizexam.xml`,
    types: [
      {
        description: "QuizExamファイル",
        accept: { "application/xml": [".quizexam.xml"] },
      },
    ],
  });
  const writable = await fileHandle.createWritable();
  await writable.write(fileContent);
  await writable.close();
  return;
}
