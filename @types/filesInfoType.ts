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
    quiz?: quizType[];
  };
}
export interface quizType {
  ["@_quizID"]: string;
  ["@_type"]: quizSelect;
  problem?: {
    ["#text"]: string;
  };
  answer: answerType;
}
export interface answerType {
  // まだ未完了
  ["#text"]?: string;
  choices?: { choice?: choiceType[] }; //多分こう
}
export interface choiceType {
  ["#text"]: string;
  ["@_answer"]?: "true" | "false" | boolean;
}

export type quizSelect = "standard" | "hold" | "choices" | "sorting" | null;
