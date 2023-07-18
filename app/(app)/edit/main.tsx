"use client";
import { useRecoilState } from "recoil";
import { fileInfoType } from "../../../types/fileInfoType";
import { filesInfoState } from "../../../lib/recoil/filesInfoState";
import { filesInfoType } from "../../../types/filesInfoType";
import { localFileContentsType } from "../../../types/localFileContentsType";
import { localFileContentsState } from "../../../lib/recoil/localFileContentsState";
import File from "../_components/file";
import { fileObjectType } from "../../../types/fileObjectType";
import { syncAndGetFile } from "../_components/syncAndGetFile";
import React from "react";
import Tools from "./tools";
const EditMain = React.memo(async ({ fileID }: { fileID: string }) => {
  const [filesInfo, setFilesInfo] =
    useRecoilState<filesInfoType>(filesInfoState);
  const [localFileContents, setLocalFileContents] =
    useRecoilState<localFileContentsType>(localFileContentsState);
  const {
    fileInfo,
    fileObject,
    setFileObject,
    setFileName,
  }: {
    fileInfo: fileInfoType;
    fileObject: fileObjectType;
    setFileObject;
    setFileName;
  } = await syncAndGetFile({
    filesInfo,
    setFilesInfo,
    fileID,
    localFileContents,
    create: true,
    setLocalFileContents,
  });
  return (
    <>
      <Tools fileInfo={fileInfo} setFileName={setFileName} addQuiz={() => {}} />
      <File fileObject={fileObject} setFileObject={setFileObject} mode="edit" />
    </>
  );
});
export default EditMain;
