import { fileInfoType, savedPlaceType } from "../filesInfo";
import { xmlFileToJson } from "./xmlFileToJson";
export async function getFileInfoFromFile(
  stringFile: string,
  fileName: string,
  savedPlace: savedPlaceType
) {
  const jsonFile: any = xmlFileToJson(stringFile);
  const fileID: string = jsonFile.quizexam["@_fileID"];
  const createdDate: Date = new Date(jsonFile.quizexam("@_createdDate"));
  const lastUpdatedDate: Date = new Date(
    jsonFile.quizexam("@_lastUpdatedDate")
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
