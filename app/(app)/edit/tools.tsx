"use client";
import { fileInfoType } from "../../../@types/filesInfoType";
import { v4 as createUUID } from "uuid";
import { BiAddToQueue } from "react-icons/bi";

export default function Tools({
  fileInfo,
  setFileInfo,
}: {
  fileInfo: fileInfoType;
  setFileInfo: (fileInfo: fileInfoType) => void;
}) {
  const defaultQuizType = "standard";
  function addSection() {
    setFileInfo({
      ...fileInfo,
      content: {
        quizexam: {
          ...fileInfo.content.quizexam,
          quiz: [
            ...fileInfo.content.quizexam.quiz,
            {
              "@_quizID": createUUID(),
              "@_type": defaultQuizType,
              answer: {
                "#text": "",
              },
            },
          ],
        },
      },
    });
  }
  return (
    <section className="flex bg-blue-200 p-2">
      <div className="flex flex-1">
        <input
          className="flex-1"
          id="filled-basic"
          defaultValue={fileInfo.name || "無題のテスト"}
          placeholder="テスト名を入力"
          onChange={(e) => {
            setFileInfo({
              ...fileInfo,
              name: e.target.value as string,
            });
          }}
        />
      </div>
      <div className="flex flex-none">
        <button onClick={addSection}>
          <BiAddToQueue />
        </button>
      </div>
    </section>
  );
}
