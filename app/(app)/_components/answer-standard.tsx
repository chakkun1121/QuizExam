"use client";
import { Input } from "@chakra-ui/react";

export default function AnswerStandard({
  answer,
  setAnswer,
}: {
  answer: string;
  setAnswer?: (newAnswer: string) => void;
}) {
  return (
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
  );
}
