"use client";

import { atom, useRecoilState } from "recoil";
import { fileInfoType, filesInfoState } from "../../../lib/filesInfo";
import Quiz from "./quiz";
import { useEffect } from "react";
import Link from "next/link";

const resentFileArrayAtom = atom<Array<Element>>({
  key: "resentFileArray",
  default: [],
});
export const isShowAnswerAtom = atom<boolean>({
  key: "isShowAnswer",
  default: false,
});
export const currentAnswerAtom = atom<Object>({
  key: "currentAnswer",
  default: {},
});
export default function SolveMain({ fileID }: { fileID: string }) {
  const [filesInfo] = useRecoilState(filesInfoState);
  const [isShowAnswer, setIsShowAnswer] = useRecoilState(isShowAnswerAtom);
  useEffect(() => {
    setIsShowAnswer(false);
  }, []);
  const resentFileXML = new DOMParser().parseFromString(
    (
      filesInfo?.files?.find(
        (fileInfo: fileInfoType) => fileInfo.ID === fileID
      ) || {}
    ).content || "",
    "text/xml"
  );
  const [resentFileArray, setRecentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
  useEffect(() => {
    setRecentFileArray(Array.from(resentFileXML.getElementsByTagName("quiz")));
  }, []);
  return (
    <>
      <div>
        {resentFileArray.map((_, index: number) => {
          return <Quiz index={index} key={index} />;
        })}
      </div>
      {!isShowAnswer ? (
        <button
          onClick={() => {
            setIsShowAnswer(true);
          }}
        >
          解答する
        </button>
      ) : (
        <>
          <Link href="/home">ホーム画面へ</Link>
        </>
      )}
    </>
  );
}
