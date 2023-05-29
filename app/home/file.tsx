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
  return (
    <div className="flex-none bg-blue-400 m-1">
      <div className="flex">
        <div className="flex-none">
          {(() => {
            switch (fileInfo.savedPlace) {
              case "local":
                return (
                  <Image
                    width={32}
                    height={32}
                    src="/local.png"
                    alt="ローカルファイル"
                  />
                );
              case "server":
                return (
                  <Image
                    width={32}
                    height={32}
                    src="/server.png"
                    alt="サーバーファイル"
                  />
                );
              case "googleDrive":
                return (
                  <Image
                    width={32}
                    height={32}
                    src="/googleDrive.png"
                    alt="GoogleDriveファイル"
                  />
                );
            }
          })()}
        </div>
        <div className="flex-1">
          <h1>{fileInfo.fileName}</h1>
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
