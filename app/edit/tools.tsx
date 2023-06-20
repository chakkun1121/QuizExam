"use client";
import { useRecoilState } from "recoil";
import { filesInfoState, fileInfoType } from "../../lib/filesInfo";
import { Input, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { v4 as createUUID } from "uuid";
import { resentFileArrayAtom } from "./main";

export default function Tools({ fileID }: { fileID: string }) {
  const [filesInfo] = useRecoilState(filesInfoState);
  const [resentFileArray, setRecentFileArray] =
    useRecoilState<Array<Element>>(resentFileArrayAtom);
  const fileInfo =
    filesInfo?.files?.find(
      (fileInfo: fileInfoType) => fileInfo.ID === fileID
    ) || {};
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
          value={fileInfo?.name || "無題のテスト"}
          placeholder="テスト名を入力"
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
