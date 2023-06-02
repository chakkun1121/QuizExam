import { getFileIDFromFile } from "./getFileIDFromFile";
export async function getFileIDFromFileHandle(fileHandle) {
  const file = await fileHandle.getFile();
  const stringFile = await file.text();
  console.log(stringFile);
  const fileID: string = await getFileIDFromFile(stringFile);
  return fileID;
}
