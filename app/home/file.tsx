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
    <div className="m-1 flex-none rounded bg-blue-400 p-2">
      <div className="flex">
        <div className="flex-none p-1">
          <Image
            width={48}
            height={48}
            src={`/icons/${fileInfo.savedPlace}.png`}
            alt={`${savedPlaceJapanese}ファイル`}
          />
        </div>
        <div className="max-w-full flex-1">
          <h1 className="truncate text-4xl">{fileInfo.name}</h1>
        </div>
      </div>
      <div className="flex">
        <div className="flex-none">
          <p>
            作成日:{new Date(fileInfo.createdDate).toLocaleDateString("ja-JP")}
          </p>
          <p>
            最終編集日:
            {new Date(fileInfo.lastUpdatedDate).toLocaleDateString("ja-JP")}
          </p>
        </div>
        <div className="flex">
          <LinkButton href={`/edit?testId=${fileInfo.ID}`}>編集</LinkButton>
          <LinkButton href={`/solve?testId=${fileInfo.ID}`}>
            回答する
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
function LinkButton({ href, children }: { href: string; children: string }) {
  return (
    <div className="m-2 rounded border border-black bg-blue-600 p-2">
      <Link href={href} className="text-white">
        {children}
      </Link>
    </div>
  );
}
