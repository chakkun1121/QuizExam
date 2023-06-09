"use client";
import Link from "next/link";
import File from "./file";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType } from "../../lib/filesInfo";
import { uploadFile } from "../../lib/localFile/uploadFile";
export default function Files() {
  const [filesInfo, setFilesInfo] = useRecoilState(filesInfoState);
  return (
    <section>
      <div className="flex">
        <h2 className="flex-1 text-2xl">ファイル一覧</h2>
        <Link className="flex-none" href="/edit">
          新規作成
        </Link>
        <button className="flex-none" onClick={uploadFile}>
          ローカルファイルを開く
        </button>
      </div>
      <div>
        {filesInfo ? (
          filesInfo.length ? (
            filesInfo.map((fileInfo: fileInfoType) => {
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
