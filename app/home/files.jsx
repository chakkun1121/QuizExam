"use client";
import Link from "next/link";
import File from "./file";
import { getFilesInfo } from "../../lib/localFile/getFileInfo";
import { openLocalFolder } from "../../lib/localFile/openLocalFolder";
import { useEffect } from "react";
export default function Files() {
  const filesInfo = getFilesInfo();
  useEffect(() => {
    openLocalFolder();
  }, []);
  return (
    <section>
      <div className="flex">
        <h2 className="flex-1 text-2xl">ファイル一覧</h2>
        <Link className="flex-none" href="/edit">
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
              ファイルがありません。
              <Link href="../edit">新しく作成</Link>してください。
            </p>
          )
        ) : (
          <p>読み込み中</p>
        )}
      </div>
    </section>
  );
}
