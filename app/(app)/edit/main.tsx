"use client";
import { useRecoilState } from "recoil";
import { filesInfoState } from "../../../lib/filesInfoState";
import { fileInfoType, filesInfoType } from "../../../@types/filesInfoType";
import { atom } from "recoil";
import Quiz from "./quiz";
import { useEffect } from "react";
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
      const resentFileXML = new DOMParser().parseFromString(
        `
      <quizexam fileID="${fileID}" createdDate="${createdDate}" lastUpdatedDate="${nowDate}">
        ${Array.from(resentFileArray)
          .map((quizXML: Element) => quizXML.outerHTML)
          .join("")}    
      </quizexam>
      `,
        "text/xml"
      );
      setFilesInfo((filesInfo: filesInfoType) => {
        const files = filesInfo.files;
        const cashFilesInfoArray: Array<fileInfoType> = [...files];
        const targetIndex = cashFilesInfoArray.findIndex(
          (fileInfo: fileInfoType) => fileInfo.ID === fileID
        );
        if (targetIndex == -1) {
          cashFilesInfoArray.push({
            ID: fileID,
            createdDate: nowDate,
            lastUpdatedDate: nowDate,
            content: resentFileXML.documentElement.outerHTML,
            name: "無題のテスト",
            savedPlace: "local",
          });
        } else {
          cashFilesInfoArray[targetIndex] = {
            ...cashFilesInfoArray[targetIndex],
            lastUpdatedDate: nowDate,
            content: resentFileXML.documentElement.outerHTML,
          };
        }
        return { files: [...cashFilesInfoArray] };
      });
    }
    a();
  }, [resentFileArray]);
  return (
    <>
      {resentFileArray.map((quizXML: Element, i: number) => {
        return (
          <Quiz
            key={quizXML?.attributes["quizID"]?.value}
            index={i}
            type={quizXML?.attributes["type"]?.value}
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
