export async function fileSystemHandleToText(
  FileSystemFileHandle: FileSystemFileHandle
) {
  const file = await FileSystemFileHandle.getFile();
  const text = await file.text();
  return text;
}
