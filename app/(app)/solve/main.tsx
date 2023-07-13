"use client";

import { useRecoilState } from "recoil";
import { fileInfoType } from "../../../types/fileInfoType";
import { filesInfoState } from "../../../lib/recoil/filesInfoState";
import { notFound } from "next/navigation";
import { isLogin } from "../_account/isLogin";
import { filesInfoType } from "../../../types/filesInfoType";
import { localFileContentsState } from "../../../lib/recoil/localFileContentsState";
import { fileObjectType } from "../../../types/fileObjectType";
import { XMLParser } from "fast-xml-parser";
import File from "../_components/file";
import { localFileContentsType } from "../../../types/localFileContentsType";
import { useState } from "react";
export default function SolveMain({ fileID }: { fileID: string }) {
  if (!fileID) notFound();
  const [filesInfo] = useRecoilState<filesInfoType>(filesInfoState);
  const [localFilesContent] = useRecoilState<localFileContentsType>(
    localFileContentsState
  );
  const [resentAnswers, setResentAnswers] = useState<string[]>([]);
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);
  if (isLogin()) {
    // await sync();
  }
  const isExistInFilesInfo = filesInfo.files.some(
    (fileInfo: fileInfoType) => fileInfo.ID == fileID
  );
  if (!isExistInFilesInfo) notFound();
  const savedPlace = filesInfo.files.find(
    (fileInfo: fileInfoType) => fileInfo.ID == fileID
  ).savedPlace;
  console.log(savedPlace === "local");
  const fileContent: string =
    savedPlace === "local"
      ? localFilesContent.files[fileID]
      : null; /*await getFIlesFromCloud(fileID)*/
  console.log(fileContent);
  if (!fileContent) notFound();
  const fileObject: fileObjectType = new XMLParser({
    ignoreAttributes: false,
  }).parse(fileContent);
  if (!fileObject) notFound();
  return (
    <>
      <File
        fileObject={fileObject}
        setResentAnswers={setResentAnswers};
        isShowAnswer={isShowAnswer}
        mode="solve"
      />
      {!isShowAnswer ? (
        <button onClick={() => setIsShowAnswer(true)}>解答する</button>
      ) : (
        <a href="/home">ホームへ戻る</a>
      )}
    </>
  );
}
