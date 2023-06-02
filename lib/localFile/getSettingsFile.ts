export async function getSettingsFile(FileSystemDirectoryHandle) {
  const settingsFile = await FileSystemDirectoryHandle.getFileHandle(
    "settings.json",
    { create: true }
  );
  return settingsFile;
}
