import { getRoot } from "../originPrivateFileSystem/getRoot";
import { addLocalFilesFromFileSystemDirectoryHandle } from "./addLocalFilesFromFileSystemDirectoryHandle";
import { getAllFiles } from "./getAllFiles";
import { getSettingsFile } from "./getSettingsFile";
export async function openLocalFolder() {
  const FileSystemDirectoryHandle = await getRoot();
  const settingsFile = await getSettingsFile(FileSystemDirectoryHandle);
  console.debug(settingsFile);
  // const allFiles: FileSystemHandle[] = await getAllFiles(
  //   FileSystemDirectoryHandle
  // );
  addLocalFilesFromFileSystemDirectoryHandle(FileSystemDirectoryHandle);
  // const allFilesID = allFiles.forEach(
  //   async (FileSystemHandle: FileSystemHandle) => {
  //     const fileInfo = await getFileInfoFromFileHandle(FileSystemHandle);
  //     console.log(fileInfo);
  //     return fileInfo;
  //   }
  // );
  // console.log(allFilesID);
}
