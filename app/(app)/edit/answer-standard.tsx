"use client";
import { answerType } from "../../../@types/filesInfoType";
import TextInput from "../_components/textInput";

export default function AnswerStandard({
  answer,
  setAnswer,
}: {
  answer: answerType;
  setAnswer: (newAnswer: answerType) => void;
}) {
  return (
    <TextInput
      type="text"
      className="w-full"
      id="answer"
      placeholder="答え"
      defaultValue={answer["#text"] || ""}
      autoComplete="off"
      onChange={(e) => {
        setAnswer({
          ...answer, //念の為
          "#text": e.target.value as string,
        });
      }}
    />
  );
}
