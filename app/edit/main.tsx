"use client";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType } from "../../lib/filesInfo";
import { atom } from "recoil";
import { useState } from "react";
import Quiz from "./quiz";
export const resentFileArrayAtom = atom({
  key: "resentFileArray",
  default: []
});
export default function EditMain({ fileID }: { fileID: string }) {
  const [filesInfo] = useRecoilState(filesInfoState);
  const [resentFileArray, setRecentFileArray] = useRecoilState(resentFileArrayAtom);
  const fileInfo =
    filesInfo?.files?.find(
      (fileInfo: fileInfoType) => fileInfo.ID === fileID
    ) || {};
  const xmlFile = new DOMParser().parseFromString(
    fileInfo?.content || "",
    "text/xml"
  );
  setRecentFileArray(
    Array.from(xmlFile.getElementsByTagName("quiz"))
  );
  return (
    <>
      {resentFileArray.map((quizXML,i) => {
        return (
          <Quiz
            key={quizXML.attributes["quizID"].value}
            quizID={quizXML.attributes["quizID"].value}
            index={i}
            type={quizXML.attributes["type"].value}
          />
        );
      })}
    </>
  );
}
