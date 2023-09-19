"use client";
import { fileInfoType } from "../../../@types/filesInfoType";
import { v4 as createUUID } from "uuid";
import { BiAddToQueue } from "react-icons/bi";
import TextInput from "../_components/textInput";
import IconButton from "../_components/iconButton";

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
    <section className="flex bg-blue-300 p-2 m-2 mb-4 rounded">
      <div className="flex flex-1">
        <TextInput
          className="flex-1"
          id="filled-basic"
          defaultValue={
            fileInfo.name.replace(/\.quizexam\.xml$/, "") || "無題のテスト"
          }
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
        <IconButton onClick={addSection}>
          <BiAddToQueue />
        </IconButton>
      </div>
    </section>
  );
}
