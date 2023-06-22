"use client";
import { useState } from "react";
import { getAnswerXML } from "../edit/main";
import { Input } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { currentAnswerAtom } from "./main";

export default function AnswerStandard({ index,quizID }: { index: number,quizID:string }) {
  const [answerXML, setAnswerXML] = useState<Element>(getAnswerXML(index));
  const [currentAnswer, setCurrentAnswer] = useRecoilState<Object>(currentAnswerAtom);
  return (
    <Input
      className="w-full"
      id="answer"
      placeholder="答え"
      defaultValue={currentAnswer[quizID]}
      onChange={(e) => {
        setCurrentAnswer({ ...currentAnswer, [quizID]: e.target.value })
      }
      }
    />
  );
}