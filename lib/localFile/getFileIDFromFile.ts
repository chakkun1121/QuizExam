import { xmlFileToJson } from "./xmlFileToJson";
export async function getFileIDFromFile(stringFile: string) {
  const jsonFile: any = xmlFileToJson(stringFile);
  const fileID: string = jsonFile.quizexam["@_fileID"];
  return fileID;
}
