"use client";
import { savedPlaceType } from "../../types/savedPlaceType";
import { fileInfoType } from "../../types/fileInfoType";

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
    xmlFile.getElementsByTagName("quizexam")[0]?.attributes?.["fileID"]
      ?.value || "";
  const createdDate: Date = new Date(
    xmlFile.getElementsByTagName("quizexam")[0]?.attributes?.["createdDate"]
      ?.value || null
  );
  const lastUpdatedDate: Date = new Date(
    xmlFile.getElementsByTagName("quizexam")[0]?.attributes?.["lastUpdatedDate"]
      ?.value || null
  );
  const fileInfo: fileInfoType = {
    ID: fileID,
    createdDate,
    lastUpdatedDate,
    name: fileName,
    savedPlace,
  };
  return fileInfo;
}
