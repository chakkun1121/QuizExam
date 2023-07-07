import { filesInfoType } from "../filesInfoType";

export function getFileName(filesInfo: filesInfoType, fileID: string): string {
  return filesInfo.files.find((file) => file.ID === fileID).name;
}
