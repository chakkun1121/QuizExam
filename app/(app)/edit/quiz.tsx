"use client";

import { ChangeEvent } from "react";
import Answer from "./answer";
import { RiDeleteBinFill } from "react-icons/ri";
import TypeSelect from "../_components/typeSelect";
import QuizLayout from "../_components/quizLayout";
import {
  answerType,
  quizSelect,
  quizType,
} from "../../../@types/filesInfoType";
import TextInput from "../_components/textInput";
import IconButton from "../_components/iconButton";
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
}: {
  type: quizSelect;
  quiz: quizType;
  setQuiz: (newQuiz: quizType) => void;
  deleteQuiz: () => void;
}) {
  return (
    <QuizLayout mode="edit">
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
      <Answer
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
      <IconButton aria-label="問題を削除" onClick={deleteQuiz}>
        <RiDeleteBinFill />
      </IconButton>
    </QuizLayout>
  );
}
