"use client";
import Link from "next/link";
import File from "./file";
import { useRecoilState } from "recoil";
import { fileInfoType } from "../../../types/fileInfoType";
import LinkButton from "../../_components/linkButton";
import { isLogin } from "../_account/isLogin";
import { syncFilesInfo } from "../../../lib/server/sync";
import { filesInfoState } from "../../../lib/recoil/filesInfoState";
import { useEffect } from "react";
import { openLocalFile } from "../../../lib/localFile/uploadFile";
import { localFileContentsState } from "../../../lib/recoil/localFileContentsState";
import { localFileContentsType } from "../../../types/localFileContentsType";
import { filesInfoType } from "../../../types/filesInfoType";

export default function Files() {
  const [filesInfo, setFilesInfo] =
    useRecoilState<filesInfoType>(filesInfoState);
  const [localFileContents, setLocalFileContents] =
    useRecoilState<localFileContentsType>(localFileContentsState);
  useEffect(() => {
    async function sync() {
      if (isLogin()) {
        const message = await syncFilesInfo(filesInfo);
        console.log(message);
      }
    }
    sync();
  }, []);
  return (
    <section>
      <div className="flex">
        <h2 className="flex-1 text-2xl">ファイル一覧</h2>
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
      <div>
        {filesInfo?.files?.length ? (
          filesInfo.files.map((fileInfo: fileInfoType) => {
            return (
              <File
                fileInfo={fileInfo}
                key={fileInfo.ID}
                fileContent={localFileContents[fileInfo.ID]}
              />
            );
          })
        ) : (
          <p>
            ファイルがありません。
            <Link href="../edit">新しく作成</Link>してください。
          </p>
        )}
      </div>
    </section>
  );
}
