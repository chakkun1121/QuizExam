"use client";
import { atom, useRecoilState } from "recoil";
import { fileInfoType, filesInfoState } from "../../lib/filesInfo";
import Quiz from "./quiz";
import { notFound } from "next/navigation";
const resentFileArrayAtom = atom<Array<Element>>({
  key: "resentFileArray",
  default: [],
});
export const isShowAnswerAtom = atom<boolean>({
  key: "isShowAnswer",
  default: false,
});
export default function SolveMain({ fileID }: { fileID: string }) {
  const [filesInfo] = useRecoilState(filesInfoState);
  // if (!(filesInfo?.files?.find((fileInfo: fileInfoType) => fileInfo.ID === fileID))) notFound()
  const resentFileXML = new DOMParser().parseFromString((filesInfo?.files?.find((fileInfo: fileInfoType) => fileInfo.ID === fileID) || {}).content || "", "text/xml")
 console.log(resentFileXML)
  const [resentFileArray, setRecentFileArray] = useRecoilState<Array<Element>>(resentFileArrayAtom);
  setRecentFileArray(Array.from(resentFileXML.getElementsByTagName("quiz")));
  return <>
    <div>
      {resentFileArray.map((_, index) => {
        return <Quiz index={index} />
      })}
    </div>
  </>
}