"use client";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType, filesInfoType } from "../../lib/filesInfo";
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
  const [filesInfo] = useRecoilState<filesInfoType>(filesInfoState);
  const [fileInfo, setFileInfo] =
    useRecoilState(currentFileInfoState);
  if (fileID) {
    setFileInfo(
      filesInfo.files.find((fileInfo: fileInfoType) => fileInfo.ID === fileID)
    );
  }
  return <></>;
}
