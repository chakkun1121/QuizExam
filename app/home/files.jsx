"use client";
import Link from "next/link";
import File from "./file";
import { useFilesInfo } from "../../lib/localFile/getFileInfo";
import { openLocalFolder } from "../../lib/localFile/openLocalFolder";
export default function Files() {
  const filesInfo = useFilesInfo();
  return (
    <section>
      <div className="flex">
        <h2 className="flex-1 text-2xl">ファイル一覧</h2>
        <Link className="flex-none" href="/edit?testId=create">
          新規作成
        </Link>
      </div>
      <div>
        {filesInfo ? (
          filesInfo.length ? (
            filesInfo.map((fileInfo) => {
              return <File fileInfo={fileInfo} />;
            })
          ) : (
            <p>
              ファイルがありません。新しく作成するか
              <a onClick={() => openLocalFolder()}>ローカルから開いて</a>
              ください。
            </p>
          )
        ) : (
          <p>読み込み中</p>
        )}
      </div>
    </section>
  );
}
