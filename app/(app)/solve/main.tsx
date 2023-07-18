"use client";

import { useRecoilState } from "recoil";
import { fileInfoType } from "../../../types/fileInfoType";
import { filesInfoState } from "../../../lib/recoil/filesInfoState";
import { notFound } from "next/navigation";
import { filesInfoType } from "../../../types/filesInfoType";
import { localFileContentsState } from "../../../lib/recoil/localFileContentsState";
import { fileObjectType } from "../../../types/fileObjectType";
import File from "../_components/file";
import { localFileContentsType } from "../../../types/localFileContentsType";
import { useState } from "react";
import { syncAndGetFile } from "../_components/syncAndGetFile";
export default async function SolveMain({ fileID }: { fileID: string }) {
  if (!fileID) notFound();
  const [filesInfo] = useRecoilState<filesInfoType>(filesInfoState);
  const [localFileContents] = useRecoilState<localFileContentsType>(
    localFileContentsState
  );
  const [resentAnswers, setResentAnswers] = useState<string[]>([]);
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);
  const {
    fileObject,
  }: {
    fileInfo: fileInfoType;
    fileObject: fileObjectType;
  } = await syncAndGetFile({
    filesInfo,
    fileID,
    localFileContents,
    create: false,
  });
  return (
    <>
      <File
        fileObject={fileObject}
        setResentAnswers={setResentAnswers}
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
