"use client";
import { useRecoilState } from "recoil";
import { fileInfoType } from "../../../types/fileInfoType";
import { filesInfoState } from "../../../lib/recoil/filesInfoState";
import { filesInfoType } from "../../../types/filesInfoType";
import Tools from "./tools";
import { v4 as createUUID } from "uuid";
export default function EditMain({ fileID }: { fileID: string }) {
  const [filesInfo, setFilesInfo] =
    useRecoilState<filesInfoType>(filesInfoState);
  // await sync(filesInfo);
  const fileInfo: fileInfoType = filesInfo.files.find(
    (fileInfo: fileInfoType) => fileInfo.ID === fileID
  ) || {
    ID: `quiz-${createUUID()}`,
    name: "無題のテスト",
    createdDate: new Date(),
    lastUpdatedDate: new Date(),
    savedPlace: "local",
  };
  return (
    <>
      <Tools
        fileInfo={fileInfo}
        setFileName={(fileName: string) => {}}
        addQuiz={() => {}}
      />
    </>
  );
}
