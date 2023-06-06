import { xmlFileToJson } from "./xmlFileToJson";
export async function getFileInfoFromFile(stringFile: string) {
  const jsonFile: any = xmlFileToJson(stringFile);
  const fileID: string = jsonFile.quizexam["@_fileID"];
  const createdDate: Date = new Date(jsonFile.quizexam("@_createdDate"));
  const lastUpdatedDate: Date = new Date(jsonFile.quizexam("@_lastUpdatedDate"));
  return { fileID ,createdDate,lastUpdatedDate};
}
