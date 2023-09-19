"use client";
import EditMain from "./main";
import Tools from "./tools";
import { v4 as getUUID } from "uuid";
import { useRecoilState } from "recoil";
import { filesInfoState } from "../../../lib/filesInfoState";
import { fileInfoType, filesInfoType } from "../../../@types/filesInfoType";

export default function EditHome(pageProps: {
  searchParams: { testId: string };
}) {
  const fileID: string = pageProps.searchParams.testId || `test-${getUUID()}`;
  const [filesInfo, setFilesInfo] =
    useRecoilState<filesInfoType>(filesInfoState);
  const fileInfo = filesInfo.files.find(
    (fileInfo) => fileInfo.content.quizexam["@_fileID"] === fileID
  );
  function setFileInfo(newFileInfo: fileInfoType) {
    setFilesInfo({
      ...filesInfo,
      files: filesInfo.files.map((fileInfo) =>
        fileInfo.content.quizexam["@_fileID"] === fileID
          ? newFileInfo
          : fileInfo
      ),
    });
  }
  return (
    <>
      <Tools fileInfo={fileInfo} setFileInfo={setFileInfo} />
      <hr className="m-2 border-black border-y-2" />
      <EditMain fileInfo={fileInfo} setFileInfo={setFileInfo} />
    </>
  );
}
