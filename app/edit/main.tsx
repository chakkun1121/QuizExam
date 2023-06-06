"use client";
import { useEffect, useState } from "react";
import { xmlFileToJson } from "../../lib/localFile/xmlFileToJson";
import { getLocalFileFromID } from "../../lib/localFile/getLocalFileFromID";
import { fileSystemHandleToText } from "/lib/localFile/fileSystemHandleToText";

export default function EditMain(fileInfo: { fileInfo: string }) {
  const fileID = fileInfo.fileInfo;
  console.log(fileID);
  const [fileJson, setFileJson] = useState<object>({});
  if (fileID) {
    //ファイル情報を取得
    const [filePlace, setFilePlace] = useState<string>("");
    useEffect(
      (async function () {
        getFilePlace(fileID).then((filePlace) => {
          setFilePlace(filePlace);
        });
        //ファイル本体を取得
        switch (filePlace) {
          case "local":
            const fileSystemHandle: FileSystemFileHandle =
              await getLocalFileFromID(fileID);
            const stringFile = await fileSystemHandleToText(fileSystemHandle);
            console.debug(stringFile);
            setFileJson(xmlFileToJson(stringFile));
            break;
          default:
            break;
        }
      })(),
      [fileID]
    );
  }

  return <></>;
}
async function getFilePlace(fileID: string) {
  // const filesInfo: FileInfoType[] = (await getFilesInfo()) || [];
  // console.debug("filesInfo", filesInfo);
  // console.debug("fileID", fileID);
  // const fileSavedPlace = filesInfo?.find(
  //   (fileInfo: FileInfoType) => fileInfo.fileID === fileID
  // )?.savedPlace;
  // return fileSavedPlace;
  return "local";
}
