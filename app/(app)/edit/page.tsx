"use client";
import EditMain from "./main";
import Tools from "./tools";
import { v4 as createUUID } from "uuid";
import { useRecoilState } from "recoil";
import { filesInfoState } from "../../../lib/filesInfoState";
import { fileInfoType, filesInfoType } from "../../../@types/filesInfoType";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function EditHome(pageProps: {
  searchParams: { testId: string };
}) {
  const router = useRouter();
  const fileID: string = pageProps.searchParams.testId;
  useEffect(() => {
    if (!fileID) router.push("/edit?testID=test-" + createUUID());
  }, []);
  const [filesInfo, setFilesInfo] =
    useRecoilState<filesInfoType>(filesInfoState);
  const fileInfo = filesInfo.files.find(
    (fileInfo) => fileInfo.content.quizexam["@_fileID"] === fileID
  );
  function setFileInfo(newFileInfo: fileInfoType) {
    setFilesInfo({
      ...filesInfo,
      files: filesInfo.files.find(
        (fileInfo) => fileInfo.content.quizexam["@_fileID"] === fileID
      )
        ? filesInfo.files.map((fileInfo) =>
            fileInfo.content.quizexam["@_fileID"] === fileID
              ? newFileInfo
              : fileInfo
          )
        : [...filesInfo.files, newFileInfo],
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
