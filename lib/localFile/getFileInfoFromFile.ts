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
  const fileID: string =
    xmlFile.getElementsByTagName("quizexam")[0]?.attributes?.["fileID"]?.value || "";
  const createdDate: Date = new Date(
    xmlFile.getElementsByTagName("quizexam")[0]?.attributes?.["createdDate"]?.value ||
      null
  );
  const lastUpdatedDate: Date = new Date(
    xmlFile.getElementsByTagName("quizexam")[0]?.attributes?.[
      "lastUpdatedDate"
    ]?.value || null
  );
  const stringFile: string =
    typeof file == "string"
      ? file
      : new XMLSerializer().serializeToString(xmlFile);
  console.log( createdDate, lastUpdatedDate, stringFile, fileName)
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
