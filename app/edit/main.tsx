"use client";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType } from "../../lib/filesInfo";
import { atom } from "recoil";
export const currentFileInfoState = atom<fileInfoType>({
  key: "currentFileInfoState",
  default: {
    ID: "",
    name: "",
    createdDate: new Date(),
    lastUpdatedDate: new Date(),
    savedPlace: "",
    content: "",
  },
});
export default function EditMain({ fileID }: { fileID: string }) {
  console.log(fileID);
  const [filesInfo, setFilesInfo] = useRecoilState(filesInfoState);
  const [fileInfo, setFileInfo] =
    useRecoilState<fileInfoType>(currentFileInfoState);
  if (fileID) {
    setFileInfo(
      filesInfo.find((fileInfo: fileInfoType) => fileInfo.ID === fileID)
    );
  }
  return <></>;
}
