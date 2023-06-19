import { fileInfoType, savedPlaceType } from "../filesInfo";
import { xmlFileToJson } from "./xmlFileToJson";
export async function getFileInfoFromFile(
  stringFile: string,
  fileName: string,
  savedPlace: savedPlaceType
) {
  if(!stringFile) throw new Error("stringFile is empty")
  const jsonFile: any = xmlFileToJson(stringFile);
  const fileID: string = jsonFile?.quizexam?.["@_fileID"] || null;
  const createdDate: Date = new Date(jsonFile.quizexam?.["@_createdDate"]||null);
  const lastUpdatedDate: Date = new Date(
    jsonFile.quizexam?.["@_lastUpdatedDate"]||null
  );
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
