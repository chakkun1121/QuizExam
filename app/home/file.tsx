"use client";

import Image from "next/image";
import Link from "next/link";
import { fileInfoType } from "../../lib/filesInfo";

export default function File({ fileInfo }: { fileInfo: fileInfoType }) {
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
    <div className="m-1 flex-none bg-blue-400">
      <div className="flex">
        <div className="flex-none">
          <Image
            width={48}
            height={48}
            src={`/icons/${fileInfo.savedPlace}.png`}
            alt={`${savedPlaceJapanese}ファイル`}
          />{" "}
        </div>
        <div className="flex-1">
          <h1 className="text-4xl">{fileInfo.name}</h1>
        </div>
      </div>
      <div className="flex">
        <div className="flex-none">
          <p>作成日:{fileInfo.createdDate.toString()}</p>
          <p>最終編集日:{fileInfo.lastUpdatedDate.toString()}</p>
        </div>
        <div className="buttons">
          <Link href={`/edit?testId=${fileInfo.ID}`}>編集</Link>
          <Link href={`/solve?testId=${fileInfo.ID}`}>回答する</Link>
        </div>
      </div>
    </div>
  );
}
