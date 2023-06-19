"use client";
import { fileInfoType, savedPlaceType } from "../filesInfo";

export async function getFileInfoFromFile(
  file: string | Element,
  fileName: string,
  savedPlace: savedPlaceType
) {
  if (!file) throw new Error("stringFile is empty");
  const xmlFile =
    typeof file == "string"
      ? new DOMParser().parseFromString(file, "text/xml")
      : file;
  console.log(xmlFile);
  const fileID: string =
    xmlFile.getElementsByTagName("quizexam")[0]?.attributes?.["fileID"] || "";
  const createdDate: Date = new Date(
    xmlFile.getElementsByTagName("quizexam")[0]?.attributes?.["createdDate"] ||
      null
  );
  const lastUpdatedDate: Date = new Date(
    xmlFile.getElementsByTagName("quizexam")[0]?.attributes?.[
      "lastUpdatedDate"
    ] || null
  );
  const stringFile: string =
    typeof file == "string"
      ? file
      : new XMLSerializer().serializeToString(xmlFile);
  const fileInfo: fileInfoType = {
    ID: fileID,
    createdDate,
    lastUpdatedDate,
    content: stringFile,
    name: fileName,
    savedPlace,
  };
  return fileInfo;
}
