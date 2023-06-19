"use client";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType } from "../../lib/filesInfo";
import { atom } from "recoil";
import Quiz from "./quiz";
import { useEffect } from "react";
import { getFileInfoFromFile } from "../../lib/localFile/getFileInfoFromFile";
export const resentFileArrayAtom = atom<Array<Element>>({
  key: "resentFileArray",
  default: [],
});
export default function EditMain({ fileID }: { fileID: string }) {
  const [filesInfo, setFilesInfo] = useRecoilState(filesInfoState);
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
  useEffect(() => {
    async function a() {
      const createdDate = (
        await getFileInfoFromFile(fileID, xmlFile.toString(), "local")
      ).createdDate;
      const nowDate = new Date();
      console.log(createdDate);
      const resentFileXML = new DOMParser().parseFromString(`
      <quizexam fileID="${fileID}" createdDate="${createdDate}" lastUpdatedDate="${nowDate}">
        ${Array.from(resentFileArray)
        .map((quizXML) => quizXML.outerHTML)
        .join("")}    
      </quizexam>
      `, "text/xml");
      console.log(resentFileXML);
    }
    a();
  }, [resentFileArray]);
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
