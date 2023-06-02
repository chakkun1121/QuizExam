import { getAllFiles } from "./getAllFiles";
import { getFileIDFromFileHandle } from "./getFileIDFromFileHandle";
import { getSettingsFile } from "./getSettingsFile";
import { showDirectoryPicker } from "./showDirectoryPicker";
export async function openLocalFolder() {
  const FileSystemDirectoryHandle = await showDirectoryPicker();
  const settingsFile = await getSettingsFile(FileSystemDirectoryHandle);
  console.log(settingsFile);
  console.log(await getAllFiles(FileSystemDirectoryHandle));
  const allFiles: FileSystemHandle[] = await getAllFiles(
    FileSystemDirectoryHandle
  );
  const allFilesID = allFiles.forEach(
    async (FileSystemHandle: FileSystemHandle) => {
      const fileID: string = await getFileIDFromFileHandle(FileSystemHandle);
      console.log(fileID);
      return fileID;
    }
  );
  console.log(allFilesID);
}
