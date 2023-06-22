"use client";
import { useState } from "react";
import { getAnswerXML } from "../edit/main";
import { Input } from "@chakra-ui/react";

export default function AnswerStandard({ index }: { index: number }) {
    const [answerXML, setAnswerXML] = useState<Element>(getAnswerXML(index));
  return (
    <Input
      className="w-full"
      id="answer"
      placeholder="答え"
      defaultValue={answerXML?.innerHTML}
    />
  );
}