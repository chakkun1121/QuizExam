"use client";
import { useRecoilState } from "recoil";
import {
  filesInfoState,
  fileInfoType,
  filesInfoType,
} from "../../lib/filesInfo";
import { Input, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { v4 as createUUID } from "uuid";
import { resentFileArrayAtom } from "./main";

export default function Tools({ fileID }: { fileID: string }) {
  const [filesInfo, setFilesInfo] = useRecoilState(filesInfoState);
  const [_, setRecentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
  const currentFileIndex: number = filesInfo?.files?.findIndex(
    (fileInfo: fileInfoType) => fileInfo.ID === fileID
  );
  function addQuiz() {
    setRecentFileArray((resentFileArray) => {
      const cashedResentFileArray = [...resentFileArray];
      const newQuizXML = new Document().createElement("quiz");
      newQuizXML.setAttribute("quizID", `quiz-${createUUID()}`);
      newQuizXML.appendChild(new Document().createElement("problem"));
      newQuizXML.appendChild(new Document().createElement("answer"));
      cashedResentFileArray.push(newQuizXML);
      return cashedResentFileArray;
    });
  }
  return (
    <section className="flex bg-blue-200 p-2">
      <div className="flex flex-1">
        <Input
          className="flex-1"
          id="filled-basic"
          defaultValue={
            filesInfo?.files?.[currentFileIndex]?.name || "無題のテスト"
          }
          placeholder="テスト名を入力"
          onChange={(e) => {
            setFilesInfo((filesInfo: filesInfoType) => {
              const cashedCurrentFileInfo = {
                ...filesInfo.files[currentFileIndex],
              };
              cashedCurrentFileInfo.name = e.target.value;
              return {
                files: filesInfo.files.map((fileInfo: fileInfoType, i:number) =>
                  i === currentFileIndex ? cashedCurrentFileInfo : fileInfo
                ),
              };
            });
          }}
        />
      </div>
      <div className="flex flex-none">
        <IconButton
          aria-label="問題を追加"
          icon={<AddIcon />}
          onClick={addQuiz}
        />
      </div>
    </section>
  );
}
