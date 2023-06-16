"use client";
import Link from "next/link";
import File from "./file";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType } from "../../lib/filesInfo";
import { getFileInfoFromFile } from "../../lib/localFile/getFileInfoFromFile";
import { showFilePicker } from "../../lib/localFile/uploadFile";

export default function Files() {
  const [filesInfo, setFilesInfo] = useRecoilState(filesInfoState);
  async function uploadFile() {
    const FileSystemFileHandle: FileSystemFileHandle = await showFilePicker();
    if (!FileSystemFileHandle) return;
    const file = await FileSystemFileHandle?.getFile();
    const fileContent = await file.text();
    const fileName = FileSystemFileHandle.name;
    const fileInfo: fileInfoType = await getFileInfoFromFile(
      fileContent,
      fileName,
      "local"
    );
    useAddFileToFilesInfo(fileInfo);
  }
  function useAddFileToFilesInfo(newFileInfo: fileInfoType) {
    // filesInfoの中にnewFileInfo.IDと同じIDを持つファイルがあれば、上書き、そうでなければ追加
    // filesInfoの中にnewFileInfo.IDと同じIDを持つファイルがあるか判定
    const isSameID = filesInfo.files.some((fileInfo: fileInfoType) => {
      return fileInfo.ID === newFileInfo.ID;
    });
    // filesInfoの中にnewFileInfo.IDと同じIDを持つファイルがある場合
    if (isSameID) {
      // filesInfoの中にnewFileInfo.IDと同じIDを持つファイルを上書き
      const newFilesInfo = filesInfo.files.map((fileInfo: fileInfoType) => {
        if (fileInfo.ID === newFileInfo.ID) {
          return newFileInfo;
        } else {
          return fileInfo;
        }
      });
      setFilesInfo({ files: newFilesInfo });
    }
    // filesInfoの中にnewFileInfo.IDと同じIDを持つファイルがない場合
    else {
      // filesInfoにnewFileInfoを追加
      setFilesInfo({ files: [...filesInfo.files, newFileInfo] });
    }
  }
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
          filesInfo.files.length ? (
            filesInfo.files.map((fileInfo: fileInfoType) => {
              return <File fileInfo={fileInfo} key={fileInfo.ID} />;
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
