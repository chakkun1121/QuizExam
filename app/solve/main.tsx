"use client";

import { atom, useRecoilState } from "recoil";
import { fileInfoType, filesInfoState } from "../../lib/filesInfo";
import Quiz from "./quiz";
import { useEffect } from "react";

const resentFileArrayAtom = atom<Array<Element>>({
  key: "resentFileArray",
  default: [],
});
export const isShowAnswerAtom = atom<boolean>({
  key: "isShowAnswer",
  default: false,
});
export default function SolveMain({ fileID }: { fileID: string }) {
  console.log("a");
  const [filesInfo] = useRecoilState(filesInfoState);
  console.log(filesInfo)
  const resentFileXML = new DOMParser().parseFromString((filesInfo?.files?.find((fileInfo: fileInfoType) => fileInfo.ID === fileID) || {}).content || "", "text/xml")
  console.log(resentFileXML)
  const [resentFileArray, setRecentFileArray] = useRecoilState<Array<Element>>(resentFileArrayAtom);
  useEffect(() => {
    setRecentFileArray(Array.from(resentFileXML.getElementsByTagName("quiz")));
  }, []);
  return <>
    <div>
      {resentFileArray.map((_, index:number) => {
        return <Quiz index={index} key={index}/>
      })}
    </div>
  </>
}