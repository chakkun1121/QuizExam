
export async function showDirectoryPicker() {
  const FileSystemDirectoryHandle = window.showDirectoryPicker
    ? await window.showDirectoryPicker({
        mode: "readwrite",
        startIn: "documents",
      })
    : null;
  return FileSystemDirectoryHandle;
}
