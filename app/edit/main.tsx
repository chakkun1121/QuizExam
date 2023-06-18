"use client";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType } from "../../lib/filesInfo";
import { atom } from "recoil";
import Quiz from "./quiz";
import { useEffect } from "react";
export const resentFileArrayAtom = atom<Array<Element>>({
  key: "resentFileArray",
  default: [],
});
export default function EditMain({ fileID }: { fileID: string }) {
  const [filesInfo] = useRecoilState(filesInfoState);
  const [resentFileArray, setRecentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
  const fileInfo =
    filesInfo?.files?.find(
      (fileInfo: fileInfoType) => fileInfo.ID === fileID
    ) || {};
  const xmlFile = new DOMParser().parseFromString(
    fileInfo?.content || "",
    "text/xml"
  );
  useEffect(() => {
    setRecentFileArray(Array.from(xmlFile.getElementsByTagName("quiz")));
  }, []);
  console.log(resentFileArray);
  return (
    <>
      {resentFileArray.map((quizXML, i) => {
        return (
          <Quiz
            key={quizXML.attributes["quizID"].value}
            index={i}
            type={quizXML.attributes["type"].value}
          />
        );
      })}
    </>
  );
}
export function getAnswerXML(index: number): Element {
  const [resentFileArray] = useRecoilState(resentFileArrayAtom);
  return resentFileArray[index].getElementsByTagName("answer")[0];
}
