"use client";
import Link from "next/link";
import File from "./file";
import { useRecoilState } from "recoil";
import { filesInfoState } from "../../../lib/filesInfoState";
import { fileInfoType } from "../../../@types/filesInfoType";
import LinkButton from "../../_components/linkButton";
import { xmlToObject } from "../../../lib/xmlToObject";
import { uploadFile } from "../../../lib/uploadFile";
export default function Files() {
  const [filesInfo, setFilesInfo] = useRecoilState(filesInfoState);
  async function upload() {
    const {
      content = "" as string,
      fileName = "" as string,
    } = await uploadFile();
    const fileData = xmlToObject(content);
    console.log(fileData);
    const fileInfo: fileInfoType = {
      name: fileName,
      content: fileData,
      savedPlace: "local",
    };
    // filesInfo.filesに同じIDのファイルがあったら上書き、なかったら追加
    const sameFileIndex = filesInfo.files.findIndex(
      (file) =>
        file.content.quizexam["@_fileID"] ===
        fileInfo.content.quizexam["@_fileID"]
    );
    if (sameFileIndex === -1) {
      setFilesInfo({
        files: [...filesInfo.files, fileInfo],
      });
    } else {
      setFilesInfo({
        files: [
          ...filesInfo.files.slice(0, sameFileIndex),
          fileInfo,
          ...filesInfo.files.slice(sameFileIndex + 1),
        ],
      });
    }
  }
  return (
    <section>
      <div className="flex">
        <h2 className="flex-1 text-2xl">ファイル一覧</h2>
        <LinkButton className="flex-none" href="/edit">
          新規作成
        </LinkButton>
        <button className="flex-none" onClick={upload}>
          ローカルファイルを開く
        </button>
      </div>
      <div>
        {filesInfo ? (
          filesInfo.files.length ? (
            filesInfo.files.map((fileInfo: fileInfoType) => {
              return (
                <File
                  fileInfo={fileInfo}
                  key={fileInfo.content.quizexam["@_fileID"]}
                />
              );
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
