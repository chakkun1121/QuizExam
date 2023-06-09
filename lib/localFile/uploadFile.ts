"use client";
export async function uploadFile() {
  const FileSystemFileHandle = showDirectoryPicker();
  return FileSystemFileHandle;
}
