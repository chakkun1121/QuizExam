"use client";
import { fileInfoType } from "../../../types/fileInfoType";
import { filesInfoType } from "../../../types/filesInfoType";
import { v4 as createUUID } from "uuid";
import { localFileContentsType } from "../../../types/localFileContentsType";
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { fileObjectType } from "../../../types/fileObjectType";
import { isLogin } from "../_account/isLogin";
import { useCallback } from "react";

export async function syncAndGetFile({
  filesInfo,
  setFilesInfo,
  fileID,
  localFileContents,
  setLocalFileContents,
  create,
}: {
  filesInfo: filesInfoType;
  setFilesInfo?: any;
  fileID: string;
  create?: boolean;
  localFileContents: localFileContentsType;
  setLocalFileContents?: any;
}) {
  if (isLogin()) {
    // await sync();
  }
  const isExistInFilesInfo = filesInfo.files.some(
    (fileInfo: fileInfoType) => fileInfo.ID == fileID
  );
  if (!isExistInFilesInfo && !create) {
    throw new Error("ファイルが見つかりません。");
  }
  const fileInfo: fileInfoType = filesInfo.files.find(
    (fileInfo: fileInfoType) => fileInfo.ID === fileID
  ) || {
    ID: `quiz-${createUUID()}`,
    name: "無題のテスト",
    createdDate: new Date(),
    lastUpdatedDate: new Date(),
    savedPlace: "local",
  };
  const fileContent: string =
    fileInfo.savedPlace == "local"
      ? localFileContents.files[fileInfo.ID] || ""
      : undefined;
  // fast-xml-parserの設定
  const fileObject: fileObjectType = new XMLParser({
    ignoreAttributes: false,
  }).parse(fileContent) || {
    quizexam: {
      "@_createdDate": new Date(),
      "@_lastUpdatedDate": new Date(),
      "@_fileID": fileID,
      quiz: [],
    },
  };
  const setFileObject = useCallback((newFileObject: fileObjectType) => {
    if (!create || !setLocalFileContents)
      throw new Error("ファイルを編集することができません。");
    const xmlFile: string = new XMLBuilder({
      ignoreAttributes: false,
    }).build(newFileObject);
    setLocalFileContents((localFileContents: localFileContentsType) => {
      return {
        files: {
          ...localFileContents.files,
          [fileInfo.ID]: xmlFile,
        },
      };
    });
  }, []);
  const setFileName = useCallback((newFileName: string) => {
    if (!create) throw new Error("ファイル名を変更することができません。");
    setFilesInfo((filesInfo: filesInfoType) => {
      const files: Array<fileInfoType> = filesInfo.files;
      const newFiles: Array<fileInfoType> = files.map((file) => {
        if (file.ID === fileInfo.ID) {
          return {
            ...file,
            name: newFileName,
          };
        } else {
          return file;
        }
      });
      return {
        files: newFiles,
      };
    });
  }, []);
  return {
    fileInfo,
    fileObject,
    setFileObject,
    setFileName,
  };
}
