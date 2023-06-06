export async function getAllFiles(
  FileSystemDirectoryHandle: FileSystemDirectoryHandle
) {
  const allFiles: FileSystemFileHandle[] = [];
  for await (const entry of FileSystemDirectoryHandle.values()) {
    if (entry.kind === "file") {
      if (entry.name.endsWith(".quizexam.xml")) {
        allFiles.push(entry);
      }
    } else if (entry.kind === "directory") {
      const files = await getAllFiles(entry);
      allFiles.push(...files);
    }
  }
  return allFiles;
}
