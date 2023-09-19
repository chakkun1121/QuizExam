"use client";

import { ChangeEvent } from "react";
import Answer from "./answer";
import { RiDeleteBinFill } from "react-icons/ri";
import TypeSelect from "./typeSelect";
import QuizLayout from "./quizLayout";
import {
  answerType,
  quizSelect,
  quizType,
} from "../../../@types/filesInfoType";
import TextInput from "./textInput";
import IconButton from "./iconButton";
export const typeOptions = [
  { value: "standard", label: "標準" },
  { value: "hold", label: "穴埋め形式" },
  { value: "choices", label: "選択問題" },
  { value: "sorting", label: "並べ替え問題" },
];
export default function Quiz({
  type,
  quiz,
  setQuiz,
  deleteQuiz,
  mode,
  isShowAnswer,
}: {
  type: quizSelect;
  quiz: quizType;
  setQuiz?: (newQuiz: quizType) => void;
  deleteQuiz?: () => void;
  mode: "edit" | "solve";
  isShowAnswer?: boolean;
}) {
  return (
    <QuizLayout mode={mode}>
      {mode === "edit" ? (
        <TextInput
          className="w-full"
          defaultValue={quiz?.problem?.["#text"]}
          onChange={(e: { target: { value: any } }) => {
            setQuiz({
              ...quiz,
              problem: {
                "#text": e.target.value,
              },
            });
          }}
          autoComplete="off"
          placeholder="問題"
        />
      ) : (
        <p>{quiz.problem?.["#text"]}</p>
      )}
      <Answer
        isShowAnswer={isShowAnswer}
        mode={mode}
        type={type}
        answer={quiz.answer}
        setAnswer={(newAnswer: answerType) => {
          setQuiz({
            ...quiz,
            answer: newAnswer,
          });
        }}
        quizID={quiz["@_quizID"]}
      />
      {mode === "edit" && (
        <TypeSelect
          value={type}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setQuiz({
              ...quiz,
              "@_type": e.target.options[e.target.selectedIndex]
                .value as quizSelect,
            });
          }}
          options={typeOptions}
        />
      )}
      {mode == "edit" && (
        <IconButton aria-label="問題を削除" onClick={deleteQuiz}>
          <RiDeleteBinFill />
        </IconButton>
      )}
    </QuizLayout>
  );
}
