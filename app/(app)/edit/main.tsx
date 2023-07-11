"use client";
import { useRecoilState } from "recoil";
import { fileInfoType } from "../../../types/fileInfoType";
import { filesInfoState } from "../../../lib/recoil/filesInfoState";
import { filesInfoType } from "../../../types/filesInfoType";
import Tools from "./tools";
import { v4 as createUUID } from "uuid";
import { localFileContentsType } from "../../../types/localFileContentsType";
import { localFileContentsState } from "../../../lib/recoil/localFileContentsState";
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import File from "../_components/file";
import { fileObjectType } from "../../../types/fileObjectType";

export default function EditMain({ fileID }: { fileID: string }) {
  const [filesInfo, setFilesInfo] =
    useRecoilState<filesInfoType>(filesInfoState);
  const [localFileContents, setLocalFileContents] =
    useRecoilState<localFileContentsType>(localFileContentsState);
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
  const fileContent: string =
    fileInfo.savedPlace == "local"
      ? localFileContents.files[fileInfo.ID] || ""
      : undefined;
  // fast-xml-parserの設定
  const fileObject: fileObjectType = new XMLParser({
    ignoreAttributes: false,
    // choiceだけは必ずobjectにする
  }).parse(fileContent) || {
    quizexam: {
      "@_createdDate": new Date(),
      "@_lastUpdatedDate": new Date(),
      "@_fileID": fileID,
      quiz: [],
    },
  };
  console.log(fileObject);
  return (
    <>
      <Tools
        fileInfo={fileInfo}
        setFileName={(fileName: string) => {
          setFilesInfo((filesInfo) => {
            const files: Array<fileInfoType> = filesInfo.files;
            const newFiles: Array<fileInfoType> = files.map((file) => {
              if (file.ID === fileInfo.ID) {
                return {
                  ...file,
                  name: fileName,
                };
              } else {
                return file;
              }
            });
            return {
              files: newFiles,
            };
          });
        }}
        addQuiz={() => {}}
      />
      <File
        fileObject={fileObject}
        setFileObject={(newFileObjet) => {
          const xmlFile: string = new XMLBuilder({
            ignoreAttributes: false,
          }).build(newFileObjet);
          setLocalFileContents((localFileContents: localFileContentsType) => {
            return {
              files: {
                ...localFileContents.files,
                [fileInfo.ID]: xmlFile,
              },
            };
          });
        }}
        mode="edit"
      />
    </>
  );
}
