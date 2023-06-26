"use client";

import { filesInfoType } from "../filesInfo";

export function getFileFromFileID(
  filesInfo: filesInfoType,
  fileID: string
): Element {
  return new DOMParser().parseFromString(
    filesInfo.files.find((file) => file.ID === fileID).content,
    "text/xml"
  ).documentElement;
}
