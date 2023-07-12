"use client";
import { Input } from "@chakra-ui/react";

export default function AnswerStandard({
  answer,
  setAnswer,
  mode,
}: {
  answer: string;
  setAnswer?: (newAnswer: string) => void;
  mode: "edit" | "solve" | "view";
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
  ) : (
    <p className="w-full">{answer}</p>
  );
}
