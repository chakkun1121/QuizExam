"use client";
import File from "./file";
export interface FileInfoType {
  fileID: string;
  fileName: string;
  createdData: string;
  lastEditedData: string;
  savedPlace: string;
}
export default function Files() {
  const filesInfo = JSON.parse(localStorage.getItem("filesInfo")) || [];
  return (
    <section>
      <h2>ファイル一覧</h2>
      <div className="">
        {filesInfo ? (
          filesInfo.map((fileInfo: FileInfoType) => {
            return <File fileInfo={fileInfo} />;
          })
        ) : (
          <p>テストがありません。テストを作成するか開いてください。</p>
        )}
      </div>
    </section>
  );
}
