import { getRoot } from "../originPrivateFileSystem/getRoot";
import { fileSystemHandleToText } from "./FIleSystemHandleToText";
import { getAllFiles } from "./getAllFiles";
import { getFileInfoFromFile } from "./getFileInfoFromFile";

/**
 * 指定したFileIDのファイルを取得する
 * @param fileID
 * @returns FileSystemFileHandle
 */
export async function getLocalFileFromID(fileID: string) {
  const root = await getRoot();
  const allFiles: FileSystemFileHandle[] = await getAllFiles(root);
  //それぞれでgetFileInfoFromFile(非同期) を実行
  const filesInfo = await Promise.all(
    allFiles.map(async (file: FileSystemFileHandle) => {
      const stringFile = await fileSystemHandleToText(file);
      const fileInfo = await getFileInfoFromFile(stringFile);
      return fileInfo;
    })
  );
  console.log(filesInfo);
  const targetFileIndex = filesInfo.findIndex((fileInfo) => {
    return fileInfo.fileID === fileID;
  });
  console.log(targetFileIndex);
  return allFiles[targetFileIndex];
}
