"use client";
import { useEffect, useState } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { getAnswerXML } from "../edit/main";
import { useRecoilState } from "recoil";
import { currentAnswerAtom } from "./main";

export default function AnswerChoices({ index, quizID }: { index: number, quizID: string }) {
  const [currentAnswer, setCurrentAnswer] = useRecoilState<Object>(currentAnswerAtom);
  const [answerXML] = useState<Element>(getAnswerXML(index));
  const choices: Array<Element> = (Array.from(answerXML?.getElementsByTagName("choice") || []));
  const [answerIndex, setAnswerIndex] = useState<number>(currentAnswer[quizID] || null);
  useEffect(() => {
    setCurrentAnswer({ ...currentAnswer, [quizID]: answerIndex })
  }, [answerIndex])
  return (
    <>
      <RadioGroup value={answerIndex?.toString()} onChange={(value)=>{setAnswerIndex(Number(value))}}>
        <Stack>
          {choices.map((content: Element, i) => {
            return (
              <div className="flex">
                <Radio
                  key={"radio" + i}
                  value={i.toString()}
                  className="m-2 flex-1"
                >
                  {content.innerHTML}
                </Radio>
              </div>
            );
          })}
        </Stack>
      </RadioGroup>
    </>
  );
}
