"use client";
import { syncFilesInfo } from "../../../lib/server/sync";
import LinkButton from "../../_components/linkButton";
import { fileInfoType } from "../../../types/fileInfoType";
import File from "./file";
import { openLocalFile } from "../../../lib/localFile/uploadFile";
import { useRecoilState } from "recoil";
import { filesInfoState } from "../../../lib/recoil/filesInfoState";
import { localFileContentsState } from "../../../lib/recoil/localFileContentsState";
import { filesInfoType } from "../../../types/filesInfoType";
import { localFileContentsType } from "../../../types/localFileContentsType";
export default function Files() {
  const [filesInfo, setFilesInfo] =
    useRecoilState<filesInfoType>(filesInfoState);
  const [localFileContents, setLocalFileContents] =
    useRecoilState<localFileContentsType>(localFileContentsState);
  console.log("filesInfo", filesInfo);
  // await syncFilesInfo(filesInfo);
  return (
    <section>
      <div className="flex">
        <h2 className="flex-1 ">ファイル一覧</h2>
        <LinkButton className="flex-none" href="/edit">
          新規作成
        </LinkButton>
        <button
          className="flex-none"
          onClick={() => {
            openLocalFile(setFilesInfo, setLocalFileContents);
          }}
        >
          ローカルファイルを開く
        </button>
      </div>
      <div className="">
        {filesInfo.files.map((fileInfo: fileInfoType) => {
          return (
            <File
              fileInfo={fileInfo}
              key={fileInfo.ID}
              fileContent={localFileContents.files[fileInfo.ID]}
            />
          );
        })}
      </div>
    </section>
  );
}
