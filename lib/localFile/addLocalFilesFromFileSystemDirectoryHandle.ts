import { getAllFiles } from "./getAllFiles";

export async function addLocalFilesFromFileSystemDirectoryHandle(
  FileSystemDirectoryHandle: FileSystemDirectoryHandle
) {
  const allFiles = await getAllFiles(FileSystemDirectoryHandle);
}
