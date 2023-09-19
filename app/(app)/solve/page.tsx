"use client";
import SolveMain from "./main";
import { useRecoilState } from "recoil";
import { filesInfoType } from "../../../@types/filesInfoType";
import { filesInfoState } from "../../../lib/filesInfoState";

export default function SolveHome(pageProps: {
  searchParams: { testId: string };
}) {
  const [filesInfo] = useRecoilState<filesInfoType>(filesInfoState);
  const fileID: string = pageProps.searchParams.testId;
  const fileInfo = filesInfo.files.find(
    (fileInfo) => fileInfo.content.quizexam["@_fileID"] === fileID
  );
  return (
    <>
      <SolveMain fileInfo={fileInfo} />
    </>
  );
}
