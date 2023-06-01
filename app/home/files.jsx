"use client";
import Link from "next/link";
import File from "./file";
import { useFilesInfo } from "./getFileInfo";

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
async function openLocalFolder() {
  const FileSystemDirectoryHandle = await showDirectoryPicker();
  const settingsFile = await getSettingsFile(FileSystemDirectoryHandle);
  console.log(settingsFile);
  console.log(await getAllFiles(FileSystemDirectoryHandle));
}
async function showDirectoryPicker() {
  const FileSystemDirectoryHandle = window.showDirectoryPicker
    ? await window.showDirectoryPicker({
        mode: "readwrite",
        startIn: "documents",
      })
    : null;
  return FileSystemDirectoryHandle;
}
async function getSettingsFile(FileSystemDirectoryHandle) {
  const settingsFile = await FileSystemDirectoryHandle.getFileHandle(
    "settings.json",
    { create: true }
  );
  return settingsFile;
}
async function getAllFiles(FileSystemDirectoryHandle) {
  const allFiles = [];
  for await (const entry of FileSystemDirectoryHandle.values()) {
    if (entry.kind === "file") {
      if (entry.name.endsWith(".quizexam.xml")) {
        allFiles.push(entry);
      }
    } else if (entry.kind === "directory") {
      const files = await getAllFiles(entry);
      allFiles.push(...files);
    }
  }
  return allFiles;
}
async function addLocalFilesFromFileSystemDirectoryHandle(
  FileSystemDirectoryHandle
) {
  const allFiles = await getAllFiles(FileSystemDirectoryHandle);
}
