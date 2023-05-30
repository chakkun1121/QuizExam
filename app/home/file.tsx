"use client";

import Image from "next/image";
import Link from "next/link";

export interface FileInfoType {
  fileID: string;
  fileName: string;
  createdData: string;
  lastEditedData: string;
  savedPlace: string;
}

export default function File({ fileInfo }: { fileInfo: FileInfoType }) {
  console.log(fileInfo);
  const savedPlaceJapanese = (() => {
    switch (fileInfo.savedPlace) {
      case "local":
        return "ローカル";
      case "cloud":
        return "クラウド";
      case "GoogleDrive":
        return "GoogleDrive";
    }
  })();
  return (
    <div className="flex-none bg-blue-400 m-1">
      <div className="flex">
        <div className="flex-none">
          <Image
            width={48}
            height={48}
            src={`/${fileInfo.savedPlace}.png`}
            alt={`${savedPlaceJapanese}ファイル`}
          />{" "}
        </div>
        <div className="flex-1">
          <h1 className="text-4xl">{fileInfo.fileName}</h1>
        </div>
      </div>
      <div className="flex">
        <div className="flex-none">
          <p>作成日:{fileInfo.createdData}</p>
          <p>最終編集日:{fileInfo.lastEditedData}</p>
        </div>
        <div className="buttons">
          <Link href={`/edit?testId=${fileInfo.fileID}`}>編集</Link>
          <Link href={`/solve?testId=${fileInfo.fileID}`}>回答する</Link>
        </div>
      </div>
    </div>
  );
}
