export type savedPlaceType = "" | "local" | "cloud" | "GoogleDrive";

export interface filesInfoType {
  files: fileInfoType[];
}
export interface fileInfoType {
  content: fileObjectType;
  name: string;
  savedPlace: savedPlaceType;
}
export interface fileObjectType {
  quizexam: {
    ["@_createdDate"]: string | Date;
    ["@_lastUpdatedDate"]: string | Date;
    ["@_fileID"]: string;
    quiz?: {
      ["@_quizID"]: string;
      ["@_type"]: "standard" | "hold" | "choices" | "sorting";
      problem?: {
        ["#text"]: string;
      };
      answer: {
        // まだ未完了
        ["#text"]: string;
      };
    }[];
  };
}
