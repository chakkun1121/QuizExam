"use client";
import { Input } from "@chakra-ui/react";

export default function AnswerStandard({
  answer,
  setAnswer,
  mode,
  isShowAnswer,
}: {
  answer: string;
  setAnswer?: (newAnswer: string) => void;
  mode: "edit" | "solve" | "view";
  isShowAnswer?: boolean;
}) {
  return mode == "edit" ? (
    <Input
      className="w-full"
      id="answer"
      placeholder="答え"
      defaultValue={answer}
      autoComplete="off"
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    />
  ) : mode == "solve" ? (
    <>
      <Input placeholder="解答欄" isDisabled={isShowAnswer} />
      {isShowAnswer ? <p>{answer}</p> : <></>}
    </>
  ) : (
    <p className="w-full">{answer}</p>
  );
}
