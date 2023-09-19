"use client";

import Image from "next/image";
import Link from "next/link";
import { fileInfoType, fileObjectType } from "../../../@types/filesInfoType";
import { downloadFile } from "../../../lib/download";
import { objectToXml } from "../../../lib/objectToXml";

export default function File({ fileInfo }: { fileInfo: fileInfoType }) {
  function getSavedPlaceJapanese(savedPlace: string) {
    switch (savedPlace) {
      case "local":
        return "ローカル";
      case "cloud":
        return "クラウド";
      case "GoogleDrive":
        return "GoogleDrive";
      default:
        return "";
    }
  }
  const fileContent: fileObjectType = fileInfo.content;
  function download(fileInfo: fileInfoType) {
    const stringFile: string = objectToXml(fileInfo.content);
    downloadFile({ name:fileInfo.name, content:stringFile});
  }
  return (
    <div className="m-2 flex-none rounded bg-blue-400 p-2">
      <div className="flex items-center">
        <div className="flex-none p-1">
          <Image
            width={48}
            height={48}
            src={`/icons/${fileInfo.savedPlace}.png`}
            alt={`${getSavedPlaceJapanese(fileInfo.savedPlace)}ファイル`}
          />
        </div>
        <div className="max-w-full flex-auto  truncate text-4xl">
          {fileInfo.name}
        </div>
      </div>
      <div className="flex">
        <div className="flex-none">
          <p>
            作成日:
            {new Date(fileContent.quizexam["@_createdDate"]).toLocaleDateString(
              "ja-JP"
            )}
          </p>
          <p>
            最終編集日:
            {new Date(
              fileContent.quizexam["@_lastUpdatedDate"]
            ).toLocaleDateString("ja-JP")}
          </p>
        </div>
        <div className="flex">
          <LinkButton href={`/edit?testId=${fileContent.quizexam["@_fileID"]}`}>
            編集
          </LinkButton>
          <LinkButton
            href={`/solve?testId=${fileContent.quizexam["@_fileID"]}`}
          >
            回答する
          </LinkButton>
          <button
            onClick={() => download(fileInfo)}
            className="m-2 rounded border border-black bg-blue-600 p-2 text-white text-L"
          >
            ダウンロード
          </button>
        </div>
      </div>
    </div>
  );
}
function LinkButton({ href, children }: { href: string; children: string }) {
  return (
    <div className="m-2 rounded border border-black bg-blue-600 p-2">
      <Link href={href} className="text-white no-underline">
        {children}
      </Link>
    </div>
  );
}
