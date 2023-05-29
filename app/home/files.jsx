"use client";
import File from "./file";
import { useFilesInfo } from "./getFile";

export default function Files() {
  const filesInfo = useFilesInfo();
  return (
    <section>
      <h2>ファイル一覧</h2>
      <div className="">
        {filesInfo ? (
          filesInfo.map((fileInfo) => {
            return <File fileInfo={fileInfo} />;
          })
        ) : (
          <p>テストがありません。テストを作成するか開いてください。</p>
        )}
      </div>
    </section>
  );
}
