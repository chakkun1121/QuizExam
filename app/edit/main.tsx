"use client";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType } from "../../lib/filesInfo";
import { atom } from "recoil";
import { useState } from "react";
import Quiz from "./quiz";
export const currentFileInfoState = atom<fileInfoType>({
  key: "currentFileInfoState",
  default: {
    ID: "",
    name: "",
    createdDate: new Date(),
    lastUpdatedDate: new Date(),
    savedPlace: "",
    content: "",
  },
});
export default function EditMain({ fileID }: { fileID: string }) {
  const [filesInfo] = useRecoilState(filesInfoState);
  const fileInfo =
    filesInfo?.files?.find(
      (fileInfo: fileInfoType) => fileInfo.ID === fileID
    ) || {};
  const xmlFile = new DOMParser().parseFromString(
    fileInfo?.content || "",
    "text/xml"
  );
  const [QuizXMLArray] = useState(
    Array.from(xmlFile.getElementsByTagName("quiz"))
  );
  return (
    <>
      {QuizXMLArray.map((quizXML) => {
        return (
          <Quiz
            key={quizXML.attributes["quizID"].value}
            quizXML={quizXML}
            type={quizXML.attributes["type"].value}
          />
        );
      })}
    </>
  );
}
