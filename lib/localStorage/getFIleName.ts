import { filesInfoType } from "../filesInfo";

export function getFileName(filesInfo: filesInfoType, fileID: string): string {
  return filesInfo.files.find((file) => file.ID === fileID).name;
}
